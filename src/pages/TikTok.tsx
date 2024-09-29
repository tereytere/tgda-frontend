import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Post } from "../interfaces/post.interface";
import { Author } from "../interfaces/author.interface";
import Themes from "../components/Themes";
import { TikTokEmbed } from "react-social-media-embed";
import {
	List,
	ListItem,
	Linked,
	AuthorLink,
} from "../styledComponents/ContentStyles";
import {
	MultimediaTextContainer,
	MultimediaContainer,
	MultimediaContentContainer,
} from "../styledComponents/PostStyles";

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

		fetchTiktok();
	}, []);

	return (
		<div className='content'>
			<h2>TikTok</h2>
			<List>
				{tiktoks.map((tiktok) => (
					<ListItem key={tiktok.id}>
						<Linked>
							<h3 className="linked">
								<Link to={`/posts/${tiktok.id}`}>{tiktok.title}</Link>
							</h3>
						</Linked>
						<MultimediaTextContainer>
							<MultimediaContainer>
								{tiktok.image && (
									<div style={{ display: "flex", justifyContent: "left" }}>
										<TikTokEmbed url={tiktok.image} width={325} />
									</div>
								)}
							</MultimediaContainer>
							<MultimediaContentContainer>
								<p>{tiktok.body}</p>
								<AuthorLink>
									{typeof tiktok.author === "object" && (
										<h4 className="author-link">
											<Link to={`/autor/${(tiktok.author as Author).id}`}>
												{(tiktok.author as Author).name}
											</Link>
										</h4>
									)}
								</AuthorLink>
								{tiktok.themes && <Themes themes={tiktok.themes} />}
							</MultimediaContentContainer>
						</MultimediaTextContainer>
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default TikTok;
