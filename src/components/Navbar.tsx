import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { SearchResults } from "../interfaces/search.interface";
import SearchIcon from "@mui/icons-material/Search";
import {
	Navbar,
	Container,
	NavbarBrand,
	NavbarNav,
	NavbarRight,
	NavbarNavItem,
	NavbarNavLink,
	SearchForm,
	SearchInput,
	SearchButton,
	MenuIcon,
	NavIcon,
	MenuBtn,
} from "../styledComponents/NavbarStyles";
import {
	LoginButton,
	LoginButtonContainer,
} from "../styledComponents/LoginStyles";

export default function NavbarComponent() {
	const [searchQuery, setSearchQuery] = useState("");
	const [error, setError] = useState<
		Error | AxiosError<unknown, unknown> | null
	>(null);
	const navigate = useNavigate();

	const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await axios.get<SearchResults>(
				"http://localhost:8000/search",
				{
					params: { query: searchQuery },
				}
			);

			// Redirect to search results page with search query in URL
			navigate(`/resultados/${searchQuery}`, {
				state: { searchResults: response.data },
			});

			// Clear the search input after successful search
			setSearchQuery("");
		} catch (error: unknown) {
			// Handle error
			if (axios.isAxiosError(error)) {
				setError(error as AxiosError<unknown, unknown>);
			} else {
				setError(new Error("An unknown error occurred"));
			}
			console.error("Error searching:", error);
		}
	};

	const { isAuthenticated, handleLogout } = useAuth();

	const handleLoginRedirect = () => {
		// Redirect to login page
		navigate("/login");
	};

	return (
		<Navbar>
			<Container>
				<NavbarBrand to="/">
					<img
						src="/favicon.ico"
						alt="Logo"
						width="40"
						height="34"
						className="d-inline-block align-text-top"
					/>
					TGdA
				</NavbarBrand>
				<MenuBtn type="checkbox" id="menu-btn" />
				<MenuIcon htmlFor="menu-btn">
					<NavIcon />
				</MenuIcon>
				<NavbarNav>
					<NavbarNavItem>
						<NavbarNavLink to="/libros">Libros</NavbarNavLink>
					</NavbarNavItem>
					<NavbarNavItem>
						<NavbarNavLink to="/peliculas">Películas</NavbarNavLink>
					</NavbarNavItem>
					<NavbarNavItem>
						<NavbarNavLink to="/podcasts">Podcasts</NavbarNavLink>
					</NavbarNavItem>
					<NavbarNavItem>
						<NavbarNavLink to="/enlaces">Enlaces</NavbarNavLink>
					</NavbarNavItem>
					<NavbarNavItem>
						<NavbarNavLink to="/ayuda">Ayuda</NavbarNavLink>
					</NavbarNavItem>
					<NavbarNavItem>
						<NavbarRight>
							<SearchForm onSubmit={handleSearch}>
								<SearchInput
									type="search"
									placeholder="Buscar"
									aria-label="Search"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
								<SearchButton type="submit">
									<SearchIcon />
								</SearchButton>{" "}
							</SearchForm>
							<LoginButtonContainer>
								{isAuthenticated ? (
									<LoginButton onClick={handleLogout}>Logout</LoginButton>
								) : (
									<LoginButton onClick={handleLoginRedirect}>Login</LoginButton>
								)}
							</LoginButtonContainer>
						</NavbarRight>
					</NavbarNavItem>
				</NavbarNav>
				{error && error.message && <div>Error: {error.message}</div>}
			</Container>
		</Navbar>
	);
}
