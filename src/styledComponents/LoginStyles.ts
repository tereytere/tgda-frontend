import styled from "styled-components";

export const LoginButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-grow: 1;

	.login-button {
		background-color: var(--main-background-color);
		color: var(--nav-background-color);
		border: 1px solid var(--border-color);
		border-radius: 3px;
		cursor: pointer;
		transition: background-color 0.3s ease;
		font-weight: bold;
		padding: 0.4rem;
		top: 10px;
		right: 10px;

		&:hover {
			background-color: var(--border-color);
		}

		@media (max-width: 480px) {
			right: 10%;
		}
	}
`;

export const LoginButton = styled.button`
	top: 10px;
	right: 10px;
	background-color: var(--main-background-color);
	color: var(--nav-background-color);
	border: 1px solid var(--border-color);
	border-radius: 3px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	font-weight: bold;
	padding: 0.4rem;

	&:hover {
		background-color: var(--border-color);
		color: var(--main-background-color);
	}

	@media (max-width: 480px) {
		right: 10%;
	}
`;

export const LoginContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;

	@media (max-width: 480px) {
		padding-top: 12%;
		padding-left: 5%;
		padding-right: 5%;
		padding-bottom: 20%;
	}
`;

export const LoginBox = styled.div`
	width: 30vw;
	background-color: var(--nav-background-color);
	padding: 2rem;
	border-radius: 10px;

	@media (max-width: 480px) {
		width: 70vw;
	}
`;

export const LoginHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: xx-large;
	font-weight: bolder;
	color: var(--main-background-color);
	margin-bottom: 2rem;

	@media (max-width: 480px) {
		font-size: 1.5rem;
	}
`;

export const SubmitButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;
	padding: 0.75rem;
	background-color: var(--main-background-color);
	color: var(--nav-background-color);
	border-radius: 6px;
	border: 1px solid var(--border-color);
	cursor: pointer;
	transition: background-color 0.3s, color 0.3s;
	font-weight: bold;

	&:hover {
		background-color: var(--nav-background-color);
		color: var(--main-background-color);
		border-color: var(--main-background-color);
	}
`;
