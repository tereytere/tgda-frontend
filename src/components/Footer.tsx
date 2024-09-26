import React from "react";
import {
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
				<div>
					<p>Teresa Ambroa de Frutos</p>
					<SocialMediaContainer>
						<StyledIcon as="a" href="https://github.com/tereytere" target="_blank">
							<GitHubIcon />
						</StyledIcon>
						<StyledIcon
							as="a"
							href="https://www.linkedin.com/in/teresa-ambroa/"
							target="_blank"
						>
							<LinkedInIcon />
						</StyledIcon>
					</SocialMediaContainer>
				</div>
				<p>2024</p>
			</div>
		</footer>
	);
};

export default Footer;
