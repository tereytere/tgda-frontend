import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Theme } from "../interfaces/theme.interface";
import { Post } from "../interfaces/post.interface";
import { Author } from "../interfaces/author.interface";
import {
	BodyContentContainer,
	List,
	ListItem,
	Linked,
	Title,
	ResultsTitle,
	ResultsContainer,
} from "../styledComponents/ContentStyles";

const Tema: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [theme, setTheme] = useState<Theme | null>(null);
	const [posts, setPosts] = useState<Post[]>([]);
	const [authors, setAuthors] = useState<Author[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchThemeDetails = async () => {
			try {
				setLoading(true);
				
				// Fetch the theme details, posts, and authors
				const { data: themeData } = await axios.get<{ theme: Theme }>(
					`http://localhost:8000/themes/${id}`
				);
				
				const fetchedTheme = themeData.theme;
				const fetchedPosts = fetchedTheme.posts || [];
				const fetchedAuthors = fetchedTheme.authors || [];

				// Set the theme, posts, and authors state
				setTheme(fetchedTheme);
				setPosts(fetchedPosts);
				setAuthors(fetchedAuthors);

			} catch (error) {
				setError("Error fetching theme details");
				console.error("Error fetching theme details:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchThemeDetails();
	}, [id]); // Trigger the effect when the theme ID changes

	if (loading) {
		return <div>Cargando...</div>; // Placeholder for loading state
	}

	if (error) {
		return <div>Error: {error}</div>; // Display error message if an error occurred
	}

	if (!theme) {
		return <div>No se ha encontrado este Tema</div>; // Handle case where theme is not found
	}

	return (
		<BodyContentContainer>
				<Title>
					<h2>{theme.name}</h2>
				</Title>
			<ResultsContainer>
				<ResultsTitle>
					<h3>Posts</h3>
				</ResultsTitle>
				<List>
					{posts.map((post) => (
						<ListItem key={post.id}>
							<Linked>
								<Link to={`/posts/${post.id}`}>{post.title}</Link>
							</Linked>
						</ListItem>
					))}
				</List>
				<ResultsTitle>
					<h3>Autores</h3>
				</ResultsTitle>
				<List>
					{authors.map((author) => (
						<ListItem key={author.id}>
							<Linked>
								<Link to={`/autor/${author.id}`}>{author.name}</Link>
							</Linked>
						</ListItem>
					))}
				</List>
			</ResultsContainer>
		</BodyContentContainer>
	);
};

export default Tema;
