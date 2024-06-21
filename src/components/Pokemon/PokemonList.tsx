import { Grid } from "@mui/material";
import { ListPokemon } from "../../interfaces/pokemon.interface";
import PokemonCard from "./PokemonCard";
import { BodyContentContainer } from "../../styledComponents/ContentStyles";

interface PokemonListProps {
	pokemons: ListPokemon[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
	return (
		<BodyContentContainer>
			{" "}
			<Grid container spacing={2}>
				{pokemons.length > 0
					? pokemons.map((p) => {
							return (
								<Grid item xs={4}>
									<PokemonCard key={p.name} pokemon={p} />
								</Grid>
							);
					})
					: null}
			</Grid>
		</BodyContentContainer>
	);
};

export default PokemonList;
