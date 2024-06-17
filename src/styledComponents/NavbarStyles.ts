import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
	background-color: var(--nav-background-color);
	border-bottom: 1px solid var(--border-color);
	color: var(--nav-text-color);
	padding: 0 1%;
	margin: 0;
	top: 0;
	position: fixed;
	width: 100%;
	height: 8%;
	font-size: var(--nav-font-size);
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	white-space: nowrap;
	z-index: 1000;
	font-weight: bold;

	@media (max-width: 480px) {
		height: 10%;
		font-size: 0.8rem;
	}

	@media (min-width: 768px) {
		height: 8%;
		font-size: 1rem;
	}

	@media (min-width: 1920px) {
		height: 8%;
		font-size: 1rem;
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	white-space: nowrap;
	width: 100%;
`;

export const NavbarBrand = styled(Link)`
	text-decoration: none;
	color: var(--nav-text-color);
	display: flex;
	align-items: center;
	gap: 0.5rem;
	flex-grow: 1;
`;

export const NavbarNav = styled.ul`
	list-style-type: none;
	display: flex;
	gap: 1rem;
	margin: 0;
	padding: 0;
	flex-grow: 1;
`;

export const NavbarNavItem = styled.li`
	margin-right: auto;
	margin-left: auto;
`;

export const NavbarNavLink = styled(Link)`
	text-decoration: none;
	color: var(--nav-text-color);
`;

export const SearchForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-grow: 1;
`;

export const SearchInput = styled.input`
	margin-right: 0.5rem;
	font-size: var(--nav-font-size);
`;

export const SearchButton = styled.button`
	background-color: var(--search-button-color);
	color: var(--border-color);
	border: 1px solid var(--border-color);
	cursor: pointer;
	border-radius: 0.5rem;
	font-size: var(--nav-font-size);

	@media (max-width: 480px) {
		font-size: 0.8rem;
	}
`;
