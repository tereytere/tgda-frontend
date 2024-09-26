import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Post } from "../interfaces/post.interface";
import {
	BodyContentContainer,
	List,
	ListItem,
	Linked,
	Title,
} from "../styledComponents/ContentStyles";

const Posts: React.FC = () => {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get<Post[]>("http://localhost:8000/posts");
				setPosts(response.data);
			} catch (error) {
				console.error("Error fetching Posts:", error);
			}
		};

		fetchPosts();
	}, []);

	return (
		<BodyContentContainer>
			<Title>
				<h2>Posts</h2>
			</Title>
			<List>
				{posts.map((post) => (
					<ListItem key={post.id}>
						<Linked>
							<Link to={`/posts/${post.id}`}>{post.title}</Link>
						</Linked>
					</ListItem>
				))}
			</List>
		</BodyContentContainer>
	);
};

export default Posts;
