import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { SearchResults } from "../interfaces/search.interface";
import {
	Navbar,
	Container,
	NavbarBrand,
	NavbarNav,
	NavbarNavItem,
	NavbarNavLink,
	SearchForm,
	SearchInput,
	SearchButton,
} from "../styledComponents/NavbarStyles";

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
				</NavbarNav>
				<SearchForm onSubmit={handleSearch}>
					<SearchInput
						type="search"
						placeholder="Buscar"
						aria-label="Search"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					<SearchButton type="submit">Buscar</SearchButton>
				</SearchForm>
				{error && error.message && <div>Error: {error.message}</div>}
			</Container>
		</Navbar>
	);
}
