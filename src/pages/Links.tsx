import React from "react";
import { Link } from "react-router-dom";
import {
	BodyContentContainer,
	Linked,
} from "../styledComponents/ContentStyles";

const Links: React.FC = () => {
	return (
		<BodyContentContainer>
			<Linked>
				<h2 className="linked">
					<Link to={`/instagram/`}>Instagram</Link>
					<br />
					<Link to={`/paginasweb/`}>Páginas Web</Link>
					<br />
					<Link to={`/youtube/`}>YouTube</Link>
				</h2>
			</Linked>
		</BodyContentContainer>
	);
};

export default Links;
