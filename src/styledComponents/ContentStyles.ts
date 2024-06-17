import styled from "styled-components";

export const BodyContentContainer = styled.div`
	flex-grow: 1;
	padding: 2%;
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
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h1`
	padding: 0;
	margin: 0;
	color: var(--border-color);
	font-size: 8vw;
	text-align: center;
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
    a {
        text-decoration: none;
        color: inherit;

        &:hover {
            color: var(--border-color);
            text-decoration: none;
        }
    }
`;
