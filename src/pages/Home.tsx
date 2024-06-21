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
				¿Te preocupa el estado de nuestro planeta?
				<br />
				¿Quieres contribuir al cuidado del medioambiente pero no sabes por dónde
				empezar?
				<br />
				¡Estás en el lugar correcto!
				<br />
				En Tu Granito de Arena, te ofrecemos recursos e información que te
				ayudarán a adoptar un estilo de vida más sostenible y consciente. Ya sea
				que quieras cambiar tu dieta, tus hábitos de compra o simplemente
				aprender más sobre cómo proteger nuestro planeta, tenemos algo para ti.
				<br />
				Descubre películas y documentales que inspiran.
				<br />
				Aprende con videos educativos y publicaciones de expertos en
				sostenibilidad y otros temas muy interesantes.
				<br />
				Descubre restaurantes, tiendas y protectoras de animales cerca de tí a
				través de nuestro mapa interactivo.
				<br />
				Inspírate con libros y artículos que profundizan en temas
				medioambientales.
				<br />
				Actúa apoyando a organizaciones que limpian nuestro planeta y protegen a
				sus habitantes. Cada pequeño cambio cuenta.
				<br />
				Podemos crear un futuro más verde y saludable para todos los habitantes
				de este planeta.
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
