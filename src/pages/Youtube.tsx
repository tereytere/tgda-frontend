import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Post } from '../interfaces/post.interface';
import { Author } from '../interfaces/author.interface';
import Themes from '../components/Themes';
import Video from '../components/Video';
import { 
  BodyContentContainer, 
  List, 
  ListItem 
} from "../styledComponents/ContentStyles"; 
import { 
  VideoTextContainer, 
  VideoContainer, 
  ContentContainer 
} from "../styledComponents/VideoStyles";
import { YouTubeItem } from "../styledComponents/PostStyles";

const Youtube: React.FC = () => {
  const [youtubes, setYoutube] = useState<Post[]>([]);

  useEffect(() => {
    const fetchYoutube = async () => {
      try {
        const response = await axios.get<Post[]>('http://localhost:8000/posts?type=youtube');
        setYoutube(response.data);
      } catch (error) {
        console.error('Error fetching YouTube: ', error);
      }
    };

    fetchYoutube();
  }, []);

  return (
    <BodyContentContainer> 
      <List>
        {youtubes.map((youtube) => (
          <ListItem key={youtube.id}>
            <YouTubeItem>
              <h3>{youtube.title}</h3>
              <VideoTextContainer>
                <VideoContainer> 
                  <Video
                    url={youtube.url}
                    title={youtube.title}
                  />
                </VideoContainer>
                <ContentContainer> 
                  <div className="content-container">
                    <p>{youtube.body}</p>
                    {typeof youtube.author === 'object' && (
                      <h4>
                        <Link to={`/autor/${(youtube.author as Author).id}`}>
                          {(youtube.author as Author).name}
                        </Link>
                      </h4>
                    )}
                    {youtube.themes && <Themes themes={youtube.themes} />}
                  </div>
                </ContentContainer>
              </VideoTextContainer>
            </YouTubeItem>
          </ListItem>
        ))}
      </List>
    </BodyContentContainer>
  );
};

export default Youtube;
