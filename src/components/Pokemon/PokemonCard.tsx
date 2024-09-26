import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ListPokemon } from "../../interfaces/pokemon.interface";
import { getColorFromUrl } from "../../utils/colors";
import { BodyContentContainer } from "../../styledComponents/ContentStyles";

interface PokemonCardProps {
	pokemon: ListPokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
	const [pokemonColor, setPokemonColor] = useState<string | null>(null);

	const getPokemonColor = useCallback(async () => {
		const color = await getColorFromUrl(pokemon.image);
		if (color) setPokemonColor(color);
	}, [pokemon]);

	useEffect(() => {
		const fetchPokemonColor = async () => {
			await getPokemonColor();
		};
		fetchPokemonColor();
	}, [getPokemonColor]);

	return (
		<BodyContentContainer>
			{" "}
			<Card sx={{ backgroundColor: pokemonColor }}>
				<CardActionArea>
					<Link
						to={`pokemon/${pokemon.name}`}
						style={{ textDecoration: "none", color: "white" }}
					>
						<CardMedia
							component="img"
							image={pokemon.image}
							title={pokemon.name}
							sx={{ height: 100, objectFit: "contain" }}
						/>
						<CardContent>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									flexDirection: "column",
									alignItems: "center",
									color: "white",
								}}
							>
								<Typography sx={{ textTransform: "capitalize" }}>
									{pokemon.name}
								</Typography>
								<Typography sx={{ textTransform: "capitalize" }}>
									#{pokemon.pokedexNumber}
								</Typography>
							</Box>
						</CardContent>
					</Link>
				</CardActionArea>
			</Card>
		</BodyContentContainer>
	);
};

export default PokemonCard;
