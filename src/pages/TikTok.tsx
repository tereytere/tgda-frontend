import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Post } from "../interfaces/post.interface";
import { Author } from "../interfaces/author.interface";
import Themes from "../components/Themes";

const TikTok: React.FC = () => {
	const [tiktoks, setTiktok] = useState<Post[]>([]);

	useEffect(() => {
		const fetchTiktok = async () => {
			try {
				const response = await axios.get<Post[]>(
					"http://localhost:8000/posts?type=tiktok"
				);
				setTiktok(response.data);
			} catch (error) {
				console.error("Error fetching tiktok:", error);
			}
		};

		//https://www.tiktok.com/@theveganeater.es/video/7405981822309502240

		fetchTiktok();
	}, []);

	return (
		<>
			<div className='content'>
				<ul className='list'>
					{tiktoks.map((tiktok) => (
						<li key={tiktok.id}>
							<h3>{tiktok.title}</h3>
							<p>{tiktok.body}</p>
							{tiktok.image && (
								<img src={tiktok.image} alt={tiktok.title} />
							)}
							{tiktok.url && (
								<p>
									<a
										href={tiktok.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{tiktok.url}
									</a>
								</p>
							)}
							{typeof tiktok.author === "object" && (
								<h4>
									<Link to={`/autor/${(tiktok.author as Author).id}`}>
										{(tiktok.author as Author).name}
									</Link>
								</h4>
							)}
							{tiktok.themes && <Themes themes={tiktok.themes} />}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default TikTok;
