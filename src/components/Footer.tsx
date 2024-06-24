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
		<FooterContainer>
			<p>Teresa Ambroa de Frutos 2024</p>
			<SocialMediaContainer>
				<StyledIcon as="a" href="https://github.com/tereytere" target="_blank">
					<GitHubIcon />
				</StyledIcon>
				<StyledIcon
					as="a"
					href="https://www.linkedin.com/in/teresaambroa/"
					target="_blank"
				>
					<LinkedInIcon />
				</StyledIcon>
			</SocialMediaContainer>
		</FooterContainer>
	);
};

export default Footer;
