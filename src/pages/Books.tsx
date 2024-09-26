import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Post } from "../interfaces/post.interface";
import { Author } from "../interfaces/author.interface";
import Themes from "../components/Themes";
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
		<>
			<div className='content'>
				<h2>Libros</h2>
				<ul className='list'>
					{books.map((book) => (
						<li key={book.id} className='book-item'>
							<h3>{book.title}</h3>
							<div className='book-details'>
								<div className='image-container'>
									{book.image && <img src={book.image} alt={book.title} />}
								</div>
								<div className='text-container'>
									<p>{book.body}</p>
									{typeof book.author === "object" && (
										<h4>
											<Link to={`/autor/${(book.author as Author).id}`}>
												{(book.author as Author).name}
											</Link>
										</h4>
									)}
									{book.themes && <Themes themes={book.themes} />}
									{book.url && (
										<p><span>Reseñas:</span>
											<GoodreadsIcon url={book.url} />
										</p>
									)}
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Books;
