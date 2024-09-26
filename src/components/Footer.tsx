import React from "react";
import {
	FooterContainer,
	SocialMediaContainer,
	StyledIcon,
} from "../styledComponents/FooterStyles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
	return (
		<footer className='footer'>
			<div>
				<p>Tu Granito de Arena&copy;</p>
				<p>Teresa Ambroa de Frutos</p>
				<p>2024</p>
			</div>
		</footer>
	);
};

export default Footer;
