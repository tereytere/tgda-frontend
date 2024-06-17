import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Map from "../components/Map";
import {
	BodyContentContainer,
	TitleContainer,
	Title,
	Linked,
} from "../styledComponents/ContentStyles";
import {
	LoginButton,
	LoginButtonContainer,
} from "../styledComponents/LoginStyles";

const Home: React.FC = () => {
	const { isAuthenticated, handleLogout } = useAuth();
	const navigate = useNavigate();

	const handleLoginRedirect = () => {
		// Redirect to login page
		navigate("/login");
	};

	return (
		<BodyContentContainer>
			<TitleContainer>
				<Title>Tu Granito de Arena</Title>
			</TitleContainer>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
				adipisci eveniet cum! Aperiam nobis commodi voluptas odit illum unde
				iure dolores quam. Vel beatae facilis error labore aliquid ab itaque!
				<br />
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
				adipisci eveniet cum! Aperiam nobis commodi voluptas odit illum unde
				iure dolores quam. Vel beatae facilis error labore aliquid ab itaque!
			</p>
			<Linked>
				<h2 className="linked">
					<Link to={`/temas/`}>Temas</Link>
					<br />
					<Link to={`/autores/`}>Autores</Link>
					<br />
					<Link to={`/posts/`}>Posts</Link>
					<br />
				</h2>
			</Linked>
			<Map />
			<LoginButtonContainer>
				{isAuthenticated ? (
					<LoginButton onClick={handleLogout}>Logout</LoginButton>
				) : (
					<LoginButton onClick={handleLoginRedirect}>Login</LoginButton>
				)}
			</LoginButtonContainer>
		</BodyContentContainer>
	);
};

export default Home;
