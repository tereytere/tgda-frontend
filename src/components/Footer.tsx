import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
	return (
		<footer className='footer'>
			<div>
				<p>Tu Granito de Arena&copy;</p>
				<div>
					<p>Teresa Ambroa de Frutos</p>
					<div className="social-media-container">
						<a className="styled-icon" href="https://github.com/tereytere" target="_blank" rel="noopener noreferrer">
							<GitHubIcon />
						</a>
						<a className="styled-icon" href="https://www.linkedin.com/in/teresa-ambroa/" target="_blank" rel="noopener noreferrer">
							<LinkedInIcon />
						</a>
					</div>				</div>
				<p>2024</p>
			</div>
		</footer>
	);
};

export default Footer;
