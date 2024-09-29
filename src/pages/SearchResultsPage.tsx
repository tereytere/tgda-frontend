import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { SearchResults } from "../interfaces/search.interface";
import {
	BodyContentContainer,
	List,
	ListItem,
	Linked,
	Title,
	ResultsContainer,
	ResultsTitle
} from "../styledComponents/ContentStyles";
import { BASE_URL } from '../constants';


const SearchResultsPage: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [searchResults, setSearchResults] = useState<SearchResults | null>(
		null
	);
	const { query } = useParams<{ query: string }>(); // Extract search query from URL

	useEffect(() => {
		setSearchQuery(query ?? "");
	}, [query]);

	useEffect(() => {
		const fetchSearchResults = async () => {
			if (!searchQuery) return;

			setLoading(true);
			setError(null);

			try {
				const response = await axios.get<SearchResults>(
					`${BASE_URL}/search`,
					{
						params: { query: searchQuery },
					}
				);
				setSearchResults(response.data);
			} catch (error) {
				console.error("Error fetching search results:", error);
				setError("Error fetching search results");
			} finally {
				setLoading(false);
			}
		};

		fetchSearchResults();
	}, [searchQuery]);

	if (loading) {
		return <BodyContentContainer>Cargando...</BodyContentContainer>;
	}

	if (error) {
		return <BodyContentContainer>Error: {error}</BodyContentContainer>;
	}

	if (
		!searchResults ||
		(searchResults &&
			searchResults.authorResults.length === 0 &&
			searchResults.postResults.length === 0 &&
			searchResults.themeResults.length === 0)
	) {
		return <div className="content">No se han encontrado resultados</div>;
	}

	const { authorResults, postResults, themeResults } = searchResults;

	return (
		<BodyContentContainer>
			<Title>
				<h2>Resultados</h2>
			</Title>
			<ResultsContainer>
				{authorResults.length > 0 && (
					<div>
						<ResultsTitle>
							<h3>Autores</h3>
						</ResultsTitle>
						<List>
							{authorResults.map((author) => (
								<ListItem key={author.id}>
									<Linked>
										<Link to={`/autor/${author.id}`}>{author.name}</Link>
									</Linked>
								</ListItem>
							))}
						</List>
					</div>
				)}

				{postResults.length > 0 && (
					<div>
						<ResultsTitle>
							<h3>Posts</h3>
						</ResultsTitle>
						<List>
							{postResults.map((post) => (
								<ListItem key={post.id}>
									<Linked>
										<Link to={`/posts/${post.id}`}>{post.title}</Link>
									</Linked>
								</ListItem>
							))}
						</List>
					</div>
				)}
				{themeResults.length > 0 && (
					<div>
						<ResultsTitle>
							<h3>Temas</h3>
						</ResultsTitle>
						<List>
							{themeResults.map((theme) => (
								<ListItem key={theme.id}>
									<Linked>
										<Link to={`/temas/${theme.id}`}>{theme.name}</Link>
									</Linked>
								</ListItem>
							))}
						</List>
					</div>
				)}
			</ResultsContainer>
		</BodyContentContainer>
	);
};

export default SearchResultsPage;
