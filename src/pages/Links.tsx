import React from "react";
import { Link } from "react-router-dom";
import {
	BodyContentContainer,
	TitleContainer,
	Title,
	HorizontalList,
	CenteredParagraph,
} from "../styledComponents/ContentStyles";

const Links: React.FC = () => {
	return (
		<BodyContentContainer>
			<TitleContainer>
				<Title>Explora Más Contenido</Title>
			</TitleContainer>
			<CenteredParagraph>
				Sumérgete en artículos profundos y reveladores sobre sostenibilidad y el
				cuidado del medio ambiente. También sobre otros de nuestros diversos
				temas pensados para que encuentres ese granito de arena que aportar para
				el bien de nuestro planeta y sus habitantes.
				<br />
				Instagram está lleno de creatividad y activismo donde se comparten ideas
				innovadoras y prácticas sobre sostenibilidad, mediambiente, salud,
				animales y muchas más cosas. Te recomendamos cuentas para obtener
				inspiración diaria.
				<br />
				Aprende de todo y sobretodo acerca del planeta que habitamos a través de
				videos informativos y documentales de YouTube que te ayudarán a
				comprender mejor los desafíos ambientales y cómo puedes contribuir.
				<br />
				La sostenibilidad es un viaje continuo y queremos que nos acompañes.
			</CenteredParagraph>
			<HorizontalList>
				<h2 className="linked">
					<Link to={`/instagram/`}>Instagram</Link>
					<Link to={`/paginasweb/`}>Páginas Web</Link>
					<Link to={`/youtube/`}>YouTube</Link>
				</h2>
			</HorizontalList>
		</BodyContentContainer>
	);
};

export default Links;
