import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Post } from "../interfaces/post.interface";
import { Author } from "../interfaces/author.interface";
import Themes from "../components/Themes";
import { InstagramEmbed } from "react-social-media-embed";
import {
  List,
  ListItem,
  Linked,
  AuthorLink,
} from "../styledComponents/ContentStyles";
import {
  MultimediaTextContainer,
  MultimediaContainer,
  MultimediaContentContainer,
} from "../styledComponents/PostStyles";
import { BASE_URL } from '../constants';


const Instagram: React.FC = () => {
  const [instagrams, setInstagram] = useState<Post[]>([]);

  useEffect(() => {
    const fetchInstagram = async () => {
      try {
        const response = await axios.get<Post[]>(
          `${BASE_URL}/posts?type=instagram`
        );
        setInstagram(response.data);
      } catch (error) {
        console.error("Error fetching instagram:", error);
      }
    };

    fetchInstagram();
  }, []);

  return (
    <div className='content'>
      <h2>Instagram</h2>
      <List>
        {instagrams.map((instagram) => (
          <ListItem key={instagram.id}>
            <Linked>
              <h3 className="linked">
                <Link to={`/posts/${instagram.id}`}>{instagram.title}</Link>
              </h3>
            </Linked>
            <MultimediaTextContainer>
              <MultimediaContainer>
                {instagram.image && (
                  <div style={{ display: "flex", justifyContent: "left" }}>
                    <InstagramEmbed url={instagram.image} width={328} />
                  </div>
                )}
              </MultimediaContainer>
              <MultimediaContentContainer>
                <p>{instagram.body}</p>
                <AuthorLink>
                  {typeof instagram.author === "object" && (
                    <h4 className="author-link">
                      <Link to={`/autor/${(instagram.author as Author).id}`}>
                        {(instagram.author as Author).name}
                      </Link>
                    </h4>
                  )}
                </AuthorLink>
                {instagram.themes && <Themes themes={instagram.themes} />}
              </MultimediaContentContainer>
            </MultimediaTextContainer>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Instagram;
