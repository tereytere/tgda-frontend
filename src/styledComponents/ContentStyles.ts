import styled from "styled-components";

export const BodyContentContainer = styled.div`
	flex-grow: 1;
	padding: 2%;
	width: 100%;
	overflow: hidden;
	background-color: var(--main-background-color);
	color: var(--text-color);
	margin-bottom: 8%;
	position: relative;
	padding-left: 5%;
	padding-right: 5%;
	padding-bottom: 20%;
	margin-top: 60px;
`;
export const CenteredParagraph = styled.p`
	text-align: center;
	max-width: 700px;
	margin: 0 auto;
`;

export const HorizontalList = styled.div`
text-align: center;
  margin-top: 20px;

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    padding: 5px 10px;
    margin: 0 5px;
    border-radius: 5px;
    background-color: var(--nav-background-color);
    color: var(--main-background-color);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--border-color);
    }
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
