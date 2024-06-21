import styled from "styled-components";

export const BodyContentContainer = styled.div`
	flex-grow: 1;
	padding: 2%;
	width: 100%;
	overflow: hidden;
	background-color: var(--main-background-color);
	color: var(--text-color);
	margin-top: 5%;
	margin-bottom: 8%;
	position: relative;

	@media (max-width: 480px) {
		padding-top: 12%;
		padding-left: 5%;
		padding-right: 5%;
		padding-bottom: 20%;
	}

	@media (min-width: 768px) {
		padding: 3%;
	}

	@media (min-width: 1920px) {
		padding: 3%;
	}
`;

export const List = styled.ul`
	list-style-type: none;
	padding: 0;
`;

export const ListItem = styled.li`
	margin-bottom: 20px;

	h3 {
		margin-bottom: 10px;
	}
`;

export const TitleContainer = styled.div`
	padding-bottom: 10px;
	padding-right: 5px;
	padding-left: 5px;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: scale(1.2);
`;

export const Title = styled.div`
	padding: 0;
	margin: 0;
	color: var(--border-color);
	text-align: center;
	font-weight: bold;
`;

export const Linked = styled.div`
	a {
		text-decoration: none;
		color: inherit;

		&:hover {
			color: var(--border-color);
			text-decoration: none;
		}
	}
`;

export const AuthorLink = styled.div`
	padding-top: 10px;
	display: flex;
	align-items: center;
	span {
		margin-right: 5px;
	}
	a {
		text-decoration: none;
		color: inherit;

		&:hover {
			color: var(--border-color);
			text-decoration: none;
		}
	}
`;

export const ReviewContainer = styled.div`
	padding-top: 10px;
	display: flex;
	align-items: center;

	span {
		margin-right: 5px;
	}
`;

export const ResultsContainer = styled.div`
	text-align: left;
`;

export const ResultsTitle = styled.div`
	text-align: left;
	color: var(--border-color);
	font-weight: bold;
	padding-bottom: 8px;
	margin: 0;
`;

export const IconLink = styled.a`
	a {
		text-decoration: none;
		color: inherit;

		&:hover {
			color: var(--border-color);
			text-decoration: none;
		}
	}
`;
