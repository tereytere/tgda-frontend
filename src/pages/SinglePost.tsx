import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Post } from "../interfaces/post.interface";
import { Author } from "../interfaces/author.interface";
import { Theme } from "../interfaces/theme.interface";
import Themes from "../components/Themes";
import Video from "../components/Video";
import { Movie as MovieIcon } from "@mui/icons-material";
import { InstagramEmbed } from "react-social-media-embed";
import { TikTokEmbed } from "react-social-media-embed";
import {
	BodyContentContainer,
	List,
	ListItem,
	Linked,
	ResultsTitle,
	ReviewContainer,
} from "../styledComponents/ContentStyles";
import {
	VideoTextContainer,
	VideoContainer,
	ContentContainer,
} from "../styledComponents/VideoStyles";
import GoodreadsIcon from "../components/GoodreadsIcon";
import {
	YouTubeItem,
	BookItem,
	StyledImage,
	StyledIcon,
	MultimediaTextContainer,
	MultimediaContainer,
	MultimediaContentContainer,
} from "../styledComponents/PostStyles";
import { BASE_URL } from '../constants';


const SinglePost: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [post, setPost] = useState<Post | null>(null);
	const [author, setAuthor] = useState<Author | null>(null);
	const [themes, setThemes] = useState<Theme[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPostDetails = async () => {
			try {
				setLoading(true);
				const { data: postData } = await axios.get<{ post: Post }>(
					`${BASE_URL}/posts/${id}`
				);

				const fetchedPost = postData.post;
				setPost(fetchedPost);

				if (fetchedPost.author && typeof fetchedPost.author === "object") {
					setAuthor(fetchedPost.author);
				} else {
					setAuthor(null); // Set author to null if the author data is invalid
					setError("Author data is invalid");
				}

				const fetchedThemes: Theme[] =
					fetchedPost.themes?.map((theme: { id: string; name: string }) => ({
						id: theme.id,
						name: theme.name,
					})) || [];
				setThemes(fetchedThemes);
			} catch (error) {
				setError("Error fetching post details");
				console.error("Error fetching post details:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchPostDetails();
	}, [id]);

	useEffect(() => { }, [post, author, themes]);

	if (loading) {
		return <div>Cargando...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!post) {
		return <div>Post no encontrado</div>;
	}

	return (
		<BodyContentContainer>
			<ResultsTitle>
				<h2>{post.title}</h2>
			</ResultsTitle>
			<List>
				{post.type === "youtube" && (
					<ListItem>
						<YouTubeItem>
							<Linked>
								<h3 className="linked">
									<Link to={`/posts/${post.id}`}>{post.title}</Link>
								</h3>
							</Linked>
							<VideoTextContainer>
								<VideoContainer>
									<Video url={post.url} title={post.title} />
								</VideoContainer>
								<ContentContainer>
									<div className="content-container">
										<p>{post.body}</p>
										{themes && <Themes themes={themes} />}
									</div>
								</ContentContainer>
							</VideoTextContainer>
						</YouTubeItem>
					</ListItem>
				)}
				{post.type === "libro" && (
					<ListItem>
						<BookItem>
							<Linked>
								<h3 className="linked">
									<Link to={`/posts/${post.id}`}>{post.title}</Link>
								</h3>
							</Linked>
							<div className="book-details">
								<div className="image-container">
									{post.image && <img src={post.image} alt={post.title} />}
								</div>
								<div className="text-container">
									<p>{post.body}</p>
									{themes && <Themes themes={themes} />}
									{post.url && (
										<ReviewContainer>
											<span>Reseñas:</span>
											<GoodreadsIcon url={post.url} />
										</ReviewContainer>
									)}
								</div>
							</div>
						</BookItem>
					</ListItem>
				)}
				{post.type === "película" && (
					<ListItem>
						<Linked>
							<h3 className="linked">
								<Link to={`/posts/${post.id}`}>{post.title}</Link>
							</h3>
						</Linked>
						<VideoTextContainer>
							<VideoContainer>
								<Video
									url={post.image ?? undefined}
									title={post.title ?? undefined}
								/>
							</VideoContainer>
							<ContentContainer>
								<div className="content-container">
									<p>{post.body}</p>
									{post.url && (
										<p>
											Mírala entera aquí:
											<a
												href={post.url}
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
									{themes && <Themes themes={themes} />}
								</div>
							</ContentContainer>
						</VideoTextContainer>
					</ListItem>
				)}
				{post.type === "instagram" && (
					<ListItem>
						<Linked>
							<h3 className="linked">
								<Link to={`/posts/${post.id}`}>{post.title}</Link>
							</h3>
						</Linked>
						<MultimediaTextContainer>
							<MultimediaContainer>
								{post.image && (
									<div style={{ display: "flex", justifyContent: "left" }}>
										<InstagramEmbed url={post.image} width={328} />
									</div>
								)}
								{post.url && (
									<div style={{ display: "flex", justifyContent: "left" }}>
										<TikTokEmbed url={post.url} width={325} />
									</div>
								)}
							</MultimediaContainer>
							<MultimediaContentContainer>
								<p>{post.body}</p>
								{post.themes && <Themes themes={post.themes} />}
							</MultimediaContentContainer>
						</MultimediaTextContainer>
					</ListItem>
				)}
				{post.type === "webpage" && (
					<ListItem>
						<Linked>
							<h3 className="linked">
								<Link to={`/posts/${post.id}`}>{post.title}</Link>
							</h3>
						</Linked>
						<p>{post.body}</p>
						{post.image && <StyledImage src={post.image} alt={post.title} />}
						{post.url && (
							<p>
								<a href={post.url} target="_blank" rel="noopener noreferrer">
									{post.url}
								</a>
							</p>
						)}
						{themes && <Themes themes={themes} />}
					</ListItem>
				)}
			</List>
		</BodyContentContainer>
	);
};

export default SinglePost;
