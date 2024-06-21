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
	justify-content: space-between;
	white-space: nowrap;
	z-index: 1000;
	font-weight: bold;

	@media (max-width: 480px) {
		height: 10%;
		font-size: 0.8rem;
		position: fixed;
	}

	@media (min-width: 768px) {
		height: 8%;
		font-size: 1rem;
		position: fixed;
	}

	@media (min-width: 1920px) {
		height: 8%;
		font-size: 1rem;
		position: fixed;
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

	@media (max-width: 768px) {
		position: absolute;
		top: 100%;
		right: 0;
		background-color: var(--nav-background-color);
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.2s ease-out;
	}
`;

export const NavbarRight = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	@media (max-width: 768px)
		flex-direction: column;
		align-items: stretch;
		width: 100%;
		text-align: center;
	}
`;
export const NavbarNavItem = styled.li`
	margin-right: auto;
	margin-left: auto;
	margin-top: 10px;

	@media (max-width: 768px) {
		width: 100%;
		text-align: center;
	}
`;

export const NavbarNavLink = styled(Link)`
	text-decoration: none;
	color: var(--nav-text-color);
	cursor: pointer;

	&:hover {
		color: var(--border-color);
	}
`;
export const SearchForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-grow: 1;

	@media (max-width: 768px) {
		justify-content: center;
		width: 100%;
		margin-bottom: 10px;
	}
`;

export const SearchInput = styled.input`
	margin-right: 0.5rem;
	font-size: var(--nav-font-size);

	@media (max-width: 768px) {
		font-size: 0.8rem;
		width: 70%;
	}
`;

export const SearchButton = styled.button`
	background-color: var(--nav-background-color);
	color: var(--main-background-color);
	border: none;
	cursor: pointer;
	font-size: var(--nav-font-size);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;

	@media (max-width: 768px) {
		font-size: 0.8rem;
	}

	& svg {
		font-size: 1.5rem;
	}
`;

export const MenuIcon = styled.label`
	cursor: pointer;
	display: inline-block;
	position: relative;
	user-select: none;
	padding: 28px 20px 28px 20px;

	@media (max-width: 768px) {
		float: right;
		padding: 10px 20px;
		margin-right: 10px;
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

export const NavIcon = styled.span`
	background: var(--border-color);
	display: block;
	height: 2px;
	position: relative;
	transition: background 0.2s ease-out;
	width: 18px;

	&:before,
	&:after {
		background: var(--border-color);
		content: "";
		display: block;
		height: 100%;
		position: absolute;
		transition: all 0.2s ease-out;
		width: 100%;
	}

	&:before {
		top: 5px;
	}

	&:after {
		top: -5px;
	}
`;

export const MenuBtn = styled.input`
	display: none;

	&:checked ~ ${NavbarNav} {
		max-height: 500px;
	}

	&:checked + ${MenuIcon} ${NavIcon} {
		background: transparent;
	}

	&:checked + ${MenuIcon} ${NavIcon}:before {
		transform: rotate(-45deg);
	}

	&:checked + ${MenuIcon} ${NavIcon}:after {
		transform: rotate(45deg);
	}

	&:checked
		+ ${MenuIcon}
		${NavIcon}:before,
		&:checked
		+ ${MenuIcon}
		${NavIcon}:after {
		top: 0;
	}
`;
