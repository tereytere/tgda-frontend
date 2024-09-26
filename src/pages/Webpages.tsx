import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Post } from '../interfaces/post.interface';
import { Author } from '../interfaces/author.interface'
import Themes from '../components/Themes';
import {
	BodyContentContainer,
	List,
	ListItem,
	Linked,
	AuthorLink,
} from "../styledComponents/ContentStyles";
import {
	StyledImage,
} from "../styledComponents/PostStyles";



const Webpages: React.FC = () => {
  const [webpages, setWebpage] = useState<Post[]>([]);

  useEffect(() => {
    const fetchWebpage = async () => {
      try {
        const response = await axios.get<Post[]>('http://localhost:8000/posts?type=webpage');
        setWebpage(response.data);
      } catch (error) {
        console.error('Error fetching webpage:', error);
      }
    };

    fetchWebpage();
  }, []);

  return (
    <>
		<BodyContentContainer>
			<List>
				{webpages.map((webpage) => (
					<ListItem key={webpage.id}>
							<Linked>
								<h3 className="linked">
									<Link to={`/posts/${webpage.id}`}>{webpage.title}</Link>
								</h3>
							</Linked>
              <p>{webpage.body}</p>
              {webpage.image && <StyledImage src={webpage.image} alt={webpage.title} />}
              {webpage.url && <p><a href={webpage.url} target="_blank" rel="noopener noreferrer">{webpage.url}</a></p>}
              <AuthorLink>
										{typeof webpage.author === "object" && (
											<h4 className="author-link">
												<Link to={`/autor/${(webpage.author as Author).id}`}>
													{(webpage.author as Author).name}
												</Link>
											</h4>
										)}
									</AuthorLink>
            {webpage.themes && <Themes themes={webpage.themes} />}
            </ListItem>
          ))}
        </List>
      </BodyContentContainer>
    </>
  );
};

export default Webpages;
