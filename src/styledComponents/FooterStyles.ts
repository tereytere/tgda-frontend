import styled from "styled-components";

export const FooterContainer = styled.footer`
	background-color: var(--nav-background-color);
	color: var(--nav-text-color);
	text-align: center;
	padding: 2%;
	width: 100%;
	height: 8%;
	font-size: 1.2vw;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	left: 0;
	bottom: 0;

	@media (max-width: 480px) {
		font-size: 0.9rem;
	}

	@media (min-width: 768px) {
		font-size: 1rem;
	}

	@media (min-width: 1920px) {
		font-size: 1rem;
	}
`;
