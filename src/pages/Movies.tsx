import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Post } from "../interfaces/post.interface";
import { Author } from "../interfaces/author.interface";
import Themes from "../components/Themes";
import Video from "../components/Video";
import {
	BodyContentContainer,
	List,
	ListItem,
} from "../styledComponents/ContentStyles";
import {
	VideoContainer,
	ContentContainer,
	VideoTextContainer,
} from "../styledComponents/VideoStyles";
const Movies: React.FC = () => {
	const [movies, setMovies] = useState<Post[]>([]);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await axios.get<Post[]>(
					"http://localhost:8000/posts?type=película"
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
						<h3>{movie.title}</h3>
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
											Mírala entera aquí:{" "}
											<a
												href={movie.url}
												target="_blank"
												rel="noopener noreferrer"
											>
												{movie.url}
											</a>
										</p>
									)}
									{typeof movie.author === "object" && (
										<h4>
											<Link to={`/autor/${(movie.author as Author).id}`}>
												{(movie.author as Author).name}
											</Link>
										</h4>
									)}
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
