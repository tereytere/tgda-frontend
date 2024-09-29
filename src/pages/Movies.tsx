import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Post } from "../interfaces/post.interface";
import { Author } from "../interfaces/author.interface";
import Themes from "../components/Themes";
import Video from "../components/Video";
import { Movie as MovieIcon } from "@mui/icons-material";
import {
	BodyContentContainer,
	List,
	ListItem,
	Linked,
	AuthorLink,
} from "../styledComponents/ContentStyles";
import {
	VideoContainer,
	ContentContainer,
	VideoTextContainer,
} from "../styledComponents/VideoStyles";
import { StyledIcon } from "../styledComponents/PostStyles";
import { BASE_URL } from '../constants';


const Movies: React.FC = () => {
	const [movies, setMovies] = useState<Post[]>([]);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await axios.get<Post[]>(
					`${BASE_URL}/posts?type=película`
				);
				setMovies(response.data);
			} catch (error) {
				console.error("Error fetching movies:", error);
			}
		};

		fetchMovies();
	}, []);

	return (
		<BodyContentContainer>
			<List>
				{movies.map((movie) => (
					<ListItem key={movie.id}>
						<Linked>
							<h3 className="linked">
								<Link to={`/posts/${movie.id}`}>{movie.title}</Link>
							</h3>
						</Linked>
						<VideoTextContainer>
							<VideoContainer>
								<Video
									url={movie.image ?? undefined}
									title={movie.title ?? undefined}
								/>
							</VideoContainer>
							<ContentContainer>
								<div className="content-container">
									<p>{movie.body}</p>
									{movie.url && (
										<p>
											Mírala entera aquí:
											<a
												href={movie.url}
												target="_blank"
												rel="noopener noreferrer"
												style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}
											>
												<StyledIcon>
													<MovieIcon fontSize="large" />
												</StyledIcon>
											</a>
										</p>
									)}
									<AuthorLink>
										{typeof movie.author === "object" && (
											<h4 className="author-link">
												<Link to={`/autor/${(movie.author as Author).id}`}>
													{(movie.author as Author).name}
												</Link>
											</h4>
										)}
									</AuthorLink>
									{movie.themes && <Themes themes={movie.themes} />}
								</div>
							</ContentContainer>
						</VideoTextContainer>
					</ListItem>
				))}
			</List>
		</BodyContentContainer>
	);
};

export default Movies;
