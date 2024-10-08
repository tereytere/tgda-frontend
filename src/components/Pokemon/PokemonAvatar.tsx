import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DetailPokemon } from "../../interfaces/pokemon.interface";
import { BodyContentContainer } from "../../styledComponents/ContentStyles";

interface PokemonAvatarProps {
	pokemon: DetailPokemon;
}

const PokemonAvatar = ({ pokemon }: PokemonAvatarProps) => {
	return (
		<BodyContentContainer>
			{" "}
			<Card sx={{ backgroundColor: pokemon.color }}>
				<CardMedia
					component="img"
					sx={{ height: 100, objectFit: "contain" }}
					image={pokemon.sprites.other["official-artwork"].front_default}
					title={pokemon.name}
				/>
				<CardContent>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Typography sx={{ textTransform: "capitalize" }}>
							{pokemon.name}
						</Typography>
						<Typography sx={{ textTransform: "capitalize" }}>
							#{pokemon.id}
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</BodyContentContainer>
	);
};

export default PokemonAvatar;
