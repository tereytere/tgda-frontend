import { Button, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link, useParams } from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";
import PokemonAvatar from "./PokemonAvatar";
import PokemonBasicInfo from "./PokemonBasicInfo";
import PokemonStats from "./PokemonStats";
import { BodyContentContainer } from "../../styledComponents/ContentStyles";

const PokemonDetail = () => {
	const { pokemonName } = useParams();

	const { pokemon, isLoading } = usePokemon({ pokemonName });

	return (
		<BodyContentContainer>
			{" "}
			<Container>
				<Grid
					container
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					spacing={2}
					mt={1}
				>
					<Grid
						item
						container
						alignItems="center"
						justifyContent="center"
						spacing={2}
					>
						{isLoading ? (
							<Box>Loading...</Box>
						) : pokemon ? (
							<>
								<Grid item xs={12} sm={6}>
									<PokemonAvatar pokemon={pokemon} />
								</Grid>
								<Grid item xs={12} sm={6}>
									<PokemonBasicInfo pokemon={pokemon} />
								</Grid>
								<Grid item xs={12} sm={6}>
									<PokemonStats pokemon={pokemon} />
								</Grid>
							</>
						) : (
							<Box>Pokemon not found</Box>
						)}
					</Grid>
					<Grid item>
						<Button component={Link} to={"/"} variant="contained">
							Go To PokemonList
						</Button>
					</Grid>
				</Grid>
			</Container>
		</BodyContentContainer>
	);
};

export default PokemonDetail;
