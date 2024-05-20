import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Author } from "../interfaces/author.interface";
import { Post } from "../interfaces/post.interface";
import {
	Instagram,
	Podcasts,
	Link as LinkIcon,
	YouTube,
} from "@mui/icons-material";

const Autor: React.FC = () => {
	const { authorId } = useParams<{ authorId: string }>();
	const [author, setAuthor] = useState<Author | null>(null);
	const [authorPosts, setAuthorPosts] = useState<Post[]>([]);

  //TODO: pasar el useEffect a Hooks
	useEffect(() => {
		const fetchAuthor = async () => {
			try {
				const response = await axios.get<Author>(
					`http://localhost:8000/authors`,
					{
						params: {
							authorId: authorId,
						},
					}
				);
				setAuthor(response.data);
			} catch (error) {
				console.error("Error fetching author:", error);
			}
		};

		const fetchAuthorPosts = async () => {
			try {
				const response = await axios.get<Post[]>(
					`http://localhost:8000/posts`,
					{
						params: {
							author_id: authorId,
						},
					}
				);
				setAuthorPosts(response.data);
			} catch (error) {
				console.error("Error fetching author posts:", error);
			}
		};

		fetchAuthor();
		fetchAuthorPosts();
	}, [authorId]);

	if (!author) {
		return <div>Cargando...</div>;
	}

	return (
		<div className='content'>
			<h2>{author.name}</h2>
			{author.image && <img src={author.image} alt={author.name} />}
			<div className='socialMedia'>
				<p>Encuéntrale también en:</p>
				{author.instagram && (
					<a href={author.instagram} target="_blank" rel="noopener noreferrer">
						<Instagram fontSize="large" />
					</a>
				)}
				{author.podcast && (
					<a href={author.podcast} target="_blank" rel="noopener noreferrer">
						<Podcasts fontSize="large" />
					</a>
				)}
				{author.webpage && (
					<a href={author.webpage} target="_blank" rel="noopener noreferrer">
						<LinkIcon fontSize="large" />
					</a>
				)}
				{author.youtube && (
					<a href={author.youtube} target="_blank" rel="noopener noreferrer">
						<YouTube fontSize="large" />
					</a>
				)}
			</div>
			<h3>Todas las creaciones de {author.name}:</h3>
			<ul>
				{authorPosts.map((post) => (
					<li key={post.id}>
						<h4>{post.title}</h4>
						<p>{post.body}</p>
						{post.image && <img src={post.image} alt={post.title} />}
						{post.url && (
							<p>
								<a href={post.url} target="_blank" rel="noopener noreferrer">
									{post.url}
								</a>
							</p>
						)}{" "}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Autor;
