import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Author } from "../interfaces/author.interface";
import { Theme } from '../interfaces/theme.interface';
import AuthorsWithCRUD from "../components/AuthorsWithCRUD";
import {
	List,
	ListItem,
	Linked,
} from "../styledComponents/ContentStyles";

const Authors: React.FC = () => {
	const [authors, setAuthors] = useState<Author[]>([]);
	const [themes, setThemes] = useState<Theme[]>([]);

	useEffect(() => {
		const fetchAuthors = async () => {
			try {
				const response = await axios.get<Author[]>(
					"http://localhost:8000/authors"
				);
				setAuthors(response.data);
			} catch (error) {
				console.error("Error fetching Authors:", error);
			}
		};

		fetchAuthors();
	}, []);

	const token = localStorage.getItem('token');


	return (
		<div className='content'>
			<h2>Autores</h2>
			{token ? (
				<AuthorsWithCRUD authors={authors} setAuthors={setAuthors} themes={themes} setThemes={setThemes} />
			) : (
				<List>
					{authors.map((author) => (
						<ListItem key={author.id}>
							<Linked>
								<Link to={`/autor/${author.id}`}>{author.name}</Link>
							</Linked>
						</ListItem>
					))}
				</List>
			)}
		</div>
	);
};

export default Authors;