import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Map from "../components/Map";

const Home: React.FC = () => {
	const navigate = useNavigate();

	const handleLoginRedirect = () => {
		// Redirect to login page
		navigate("/login");
	};

	return (
		<div className="content">
			<h1>Tu Granito de Arena</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
				adipisci eveniet cum! Aperiam nobis commodi voluptas odit illum unde
				iure dolores quam. Vel beatae facilis error labore aliquid ab itaque!
				<br></br>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
				adipisci eveniet cum! Aperiam nobis commodi voluptas odit illum unde
				iure dolores quam. Vel beatae facilis error labore aliquid ab itaque!
			</p>
			<h2>
				<Link to={`/temas/`}>Temas</Link>
				<br></br>
				<Link to={`/autores/`}>Autores</Link>
				<br></br>
				<Link to={`/posts/`}>Posts</Link>
				<br></br>
			</h2>
			<Map />
			<div className="login-button-container">
				<button className="login-button" onClick={handleLoginRedirect}>
					Login
				</button>
			</div>
		</div>
	);
};

export default Home;
