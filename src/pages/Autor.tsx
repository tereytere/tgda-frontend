import React from "react";
import { Link, useParams } from "react-router-dom";
import {
	Instagram,
	Podcasts,
	Link as LinkIcon,
	YouTube,
	Movie as MovieIcon,
} from "@mui/icons-material";
import { InstagramEmbed } from "react-social-media-embed";
import { TikTokEmbed } from "react-social-media-embed";
import Themes from "../components/Themes";
import Video from "../components/Video";
import { useAutorData } from "../hooks/useAutorData";
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
	StyledIcon,
	SocialMediaContainer,
	YouTubeItem,
	BookItem,
	StyledImage,
	MultimediaTextContainer,
	MultimediaContainer,
	MultimediaContentContainer,
} from "../styledComponents/PostStyles";

const Autor: React.FC = () => {
	const { authorId } = useParams<{ authorId?: string }>();
	const { author, authorPosts } = useAutorData(authorId || "");

	if (!author) {
		return <div>Cargando...</div>;
	}

	return (
		<BodyContentContainer>
			<ResultsTitle>
				<h2>{author.name}</h2>
			</ResultsTitle>
			{author.image && <img src={author.image} alt={author.name} />}
			<p>Encuéntrale también en:</p>
			<SocialMediaContainer>
				{author.instagram && (
					<a href={author.instagram} target="_blank" rel="noopener noreferrer">
						<StyledIcon>
							<Instagram fontSize="large" />
						</StyledIcon>
					</a>
				)}
				{author.podcast && (
					<a href={author.podcast} target="_blank" rel="noopener noreferrer">
						<StyledIcon>
							<Podcasts fontSize="large" />
						</StyledIcon>
					</a>
				)}
				{author.webpage && (
					<a href={author.webpage} target="_blank" rel="noopener noreferrer">
						<StyledIcon>
							<LinkIcon fontSize="large" />
						</StyledIcon>
					</a>
				)}
				{author.youtube && (
					<a href={author.youtube} target="_blank" rel="noopener noreferrer">
						<StyledIcon>
							<YouTube fontSize="large" />
						</StyledIcon>
					</a>
				)}
			</SocialMediaContainer>
			<ResultsTitle>
				<p>Todas las creaciones de {author.name}:</p>
			</ResultsTitle>
			<List>
				{authorPosts.map((post) => (
					<React.Fragment key={post.id}>
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
												{post.themes && <Themes themes={post.themes} />}
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
											{post.themes && <Themes themes={post.themes} />}
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
														style={{
															display: "flex",
															alignItems: "center",
															textDecoration: "none",
															color: "inherit",
														}}
													>
														<StyledIcon>
															<MovieIcon fontSize="large" />
														</StyledIcon>
													</a>
												</p>
											)}
											{post.themes && <Themes themes={post.themes} />}
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
								{post.image && (
									<StyledImage src={post.image} alt={post.title} />
								)}
								{post.url && (
									<p>
										<a
											href={post.url}
											target="_blank"
											rel="noopener noreferrer"
										>
											{post.url}
										</a>
									</p>
								)}
								{post.themes && <Themes themes={post.themes} />}
							</ListItem>
						)}
					</React.Fragment>
				))}
			</List>
		</BodyContentContainer>
	);
};

export default Autor;
