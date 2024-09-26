import React from "react";
import { IconLink } from "../styledComponents/ContentStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoodreads } from "@fortawesome/free-brands-svg-icons";

interface IconLinkProps {
	url: string;
}

const GoodreadsIcon: React.FC<IconLinkProps> = ({ url }) => (
	<IconLink href={url} target="_blank" rel="noopener noreferrer">
		<FontAwesomeIcon icon={faGoodreads} />
	</IconLink>
);

export default GoodreadsIcon;
