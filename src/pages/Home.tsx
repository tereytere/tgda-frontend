import React from "react";
import { Link } from "react-router-dom";
import Map from "../components/Map";
import {
	BodyContentContainer,
	TitleContainer,
	Title,
	Linked,
} from "../styledComponents/ContentStyles";

const Home: React.FC = () => {

	return (
		<BodyContentContainer>
			<TitleContainer>
				<Title>
					<h1>Tu Granito de Arena</h1>
				</Title>
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
		</BodyContentContainer>
	);
};

export default Home;
