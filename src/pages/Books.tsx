import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Post } from "../interfaces/post.interface";
import { Author } from "../interfaces/author.interface";
import Themes from "../components/Themes";
import {
	BodyContentContainer,
	List,
	ListItem,
	Linked,
	AuthorLink,
} from "../styledComponents/ContentStyles";
import { BookItem } from "../styledComponents/PostStyles";
import GoodreadsIcon from "../components/GoodreadsIcon";

const Books: React.FC = () => {
	const [books, setBooks] = useState<Post[]>([]);

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const response = await axios.get<Post[]>(
					"http://localhost:8000/posts?type=libro"
				);
				setBooks(response.data);
			} catch (error) {
				console.error("Error fetching books:", error);
			}
		};

		fetchBooks();
	}, []);

	return (
		<BodyContentContainer>
			<List>
				{books.map((book) => (
					<ListItem key={book.id}>
						<BookItem>
							<Linked>
								<h3 className="linked">
									<Link to={`/post/${book.id}`}>{book.title}</Link>
								</h3>
							</Linked>
							<div className="book-details">
								<div className="image-container">
									{book.image && <img src={book.image} alt={book.title} />}
								</div>
								<div className="text-container">
									<p>{book.body}</p>
									<AuthorLink>
										{typeof book.author === "object" && (
											<h4 className="author-link">
												<Link to={`/autor/${(book.author as Author).id}`}>
													{(book.author as Author).name}
												</Link>
											</h4>
										)}
									</AuthorLink>
									{book.themes && <Themes themes={book.themes} />}
									{book.url && (
										<p>
											Reseñas:
											<a
												href={book.url}
												target="_blank"
												rel="noopener noreferrer"
											>
												<GoodreadsIcon url={book.url} />
											</a>
										</p>
									)}
								</div>
							</div>
						</BookItem>
					</ListItem>
				))}
			</List>
		</BodyContentContainer>
	);
};

export default Books;
