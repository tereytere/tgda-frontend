import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Author } from "../interfaces/author.interface";
//import AuthorsWithCRUD from "../components/AuthorsWithCRUD";
import {
	BodyContentContainer,
	List,
	ListItem,
	Linked,
	Title,
} from "../styledComponents/ContentStyles";

const Authors: React.FC = () => {
	const [authors, setAuthors] = useState<Author[]>([]);

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

	const { isAuthenticated } = useAuth();

/* 	const handleDelete = async (author: Author) => {
		try {
			await axios.delete(`http://localhost:8000/authors/${author.id}`);
			setAuthors(authors.filter((a) => a.id !== author.id));
		} catch (error) {
			console.error("Error deleting author:", error);
		}
	}; */

/* 	const entryActionsProps = {
		onEdit: () => {}, // Placeholder function
		onDelete: handleDelete,
	};
 */
	return (
		<BodyContentContainer>
			<Title>
				<h2>Autores</h2>
			</Title>
			{isAuthenticated ? (
				<BodyContentContainer>
{/* 					<AuthorsWithCRUD
						authors={authors}
						entryActionsProps={entryActionsProps}
						setAuthors={setAuthors}
					/>
 */}				</BodyContentContainer>
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
		</BodyContentContainer>
	);
};

export default Authors;