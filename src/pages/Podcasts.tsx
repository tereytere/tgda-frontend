import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Post } from "../interfaces/post.interface";
import { Author } from "../interfaces/author.interface";
import Themes from "../components/Themes";
import {
	List,
	ListItem,
	Linked,
	AuthorLink,
} from "../styledComponents/ContentStyles";
import {
	PodcastContainer,
	ContentContainer,
	VideoTextContainer,
} from "../styledComponents/PodcastStyles";
import { BASE_URL } from '../constants';


const Podcasts: React.FC = () => {
	const [podcasts, setPodcast] = useState<Post[]>([]);

	useEffect(() => {
		const fetchPodcast = async () => {
			try {
				const response = await axios.get<Post[]>(
					`${BASE_URL}/posts?type=podcast`
				);
				setPodcast(response.data);
			} catch (error) {
				console.error("Error fetching podcast: ", error);
			}
		};

		fetchPodcast();
	}, []);

	return (
		<div className="content">
			<h2>Podcasts</h2>
			<List>
				{podcasts.map((podcast) => (
					<ListItem key={podcast.id}>
						<Linked>
							<h3 className="linked">
								<Link to={`/posts/${podcast.id}`}>{podcast.title}</Link>
							</h3>
						</Linked>
						<VideoTextContainer>
							<PodcastContainer>
								<iframe
									src={podcast.url || undefined}
									width="100%"
									height="352"
									allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
									loading="lazy"
									style={{ borderRadius: "12px" }}
								></iframe>
							</PodcastContainer>
							<ContentContainer>
								<div className="content-container">
									<p>{podcast.body}</p>
									<AuthorLink>
										{typeof podcast.author === "object" && (
											<h4 className="author-link">
												<Link to={`/autor/${(podcast.author as Author).id}`}>
													{(podcast.author as Author).name}
												</Link>
											</h4>
										)}
									</AuthorLink>
									{podcast.themes && <Themes themes={podcast.themes} />}
								</div>
							</ContentContainer>
						</VideoTextContainer>
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default Podcasts;
