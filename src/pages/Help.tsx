import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Theme } from "../interfaces/theme.interface";
import { Post } from "../interfaces/post.interface";
import { Author } from "../interfaces/author.interface";
import Form from "../components/Form";
import CharityListContainer from "../components/CharityListContainer";
import {
	BodyContentContainer,
	Title,
	ResultsTitle,
	List,
	ListItem,
	Linked,
} from "../styledComponents/ContentStyles";
import {
	HelpContainer,
	LeftSection,
	RightSection,
} from "../styledComponents/HelpStyles";
import { BASE_URL } from '../constants';


const Help: React.FC = () => {
	const [theme, setTheme] = useState<Theme | null>(null);
	const [posts, setPosts] = useState<Post[]>([]);
	const [authors, setAuthors] = useState<Author[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchThemeDetails = async () => {
			try {
				setLoading(true);
				// Fetch the theme details by name "ayuda"
				const themeSearchResponse = await axios.get<Theme[]>(
					`${BASE_URL}/themes?name=${encodeURIComponent("ayuda")}`
				);
				const themeData = themeSearchResponse.data.find(
					(t) => t.name === "ayuda"
				);

				if (!themeData) {
					setError("Theme not found");
					setLoading(false);
					return;
				}

				setTheme(themeData);

				// Fetch the related posts and authors for the theme
				const relatedDataResponse = await axios.get<{ theme: Theme }>(
					`${BASE_URL}/themes/${themeData.id}`
				);
				const fetchedPosts = relatedDataResponse.data.theme.posts;
				const fetchedAuthors = relatedDataResponse.data.theme.authors;

				// Check if posts and authors are defined before setting the state
				if (fetchedPosts && fetchedAuthors) {
					setPosts(fetchedPosts);
					setAuthors(fetchedAuthors);
				} else {
					setError("Posts or authors data is undefined");
				}
			} catch (error) {
				setError("Error fetching theme details");
				console.error("Error fetching theme details:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchThemeDetails();
	}, []); // This effect runs once on component mount

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
				<h2>Aporta tu granito de arena</h2>
			</Title>
			<ResultsTitle>
				<h3>Posts</h3>
			</ResultsTitle>
			{/* Posts list */}
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
			{/* Authors list */}
			<List>
				{authors.map((author) => (
					<ListItem key={author.id}>
						<Linked>
							<Link to={`/autor/${author.id}`}>{author.name}</Link>
						</Linked>
					</ListItem>
				))}
			</List>
			{/* Donations and Join sections */}
			<HelpContainer>
				<LeftSection>
					<ResultsTitle>
						<h3>Dona a las organizaciones comprometidas con el planeta</h3>
					</ResultsTitle>
					<CharityListContainer />
				</LeftSection>
				<RightSection>
					<ResultsTitle>
						<h3>Únete</h3>
					</ResultsTitle>
					<div className="form-div">
						<Form />
					</div>
				</RightSection>
			</HelpContainer>
			<ResultsTitle>
				<h3>Elige un nombre para tu acompañante</h3>
			</ResultsTitle>
			<Link to="/pokemon">Pokemon</Link>
			<p>10277</p>
		</BodyContentContainer>
	);
};

export default Help;
