import React from "react";
import { List } from "@mui/material";
import CharityItem from "./CharityList";

const charities = [
	{ name: "4ocean", url: "https://www.4ocean.com/" },
	{	name: "Charles Darwin Foundation", url: "https://www.darwinfoundation.org/en/"	},
	{ name: "Club Ocean", url: "https://eu.clubocean.co/" },
	{ name: "Conservation International", url: "https://www.conservation.org/" },
	{ name: "Defenders of Wildlife", url: "https://defenders.org/" },
	{	name: "Durrell Wildlife Conservation Trust", url: "https://www.durrell.org/"	},
	{ name: "Extintion Rebellion", url: "https://rebellion.global/" },
	{ name: "Follow Your Legend", url: "https://followyourlegend.com/" },
	{ name: "Inga Foundation", url: "https://ingatree.org/" },
	{	name: "International Animal Rescue", url: "https://www.internationalanimalrescue.org/"	},
	{	name: "International Tree Foundation", url: "https://www.internationaltreefoundation.org/"	},
	{ name: "Neighborhood Forest", url: "https://www.neighborhoodforest.org/" },
	{ name: "Oceana", url: "https://oceana.org/" },
	{ name: "One Tree Planted", url: "https://onetreeplanted.org/" },
	{ name: "only one", url: "https://only.one/" },
	{ name: "PADI AWARE Foundation", url: "https://www.padi.com/es/conservaci%C3%B3n"	},
	{ name: "Plastic Fischer", url: "https://plasticfischer.com/" },
	{ name: "Practical Action", url: "https://practicalaction.org/" },
	{ name: "Re:Wild", url: "https://www.rewild.org/" },
	{ name: "Sea Shepherd", url: "https://www.seashepherdglobal.org/" },
	{ name: "TeamTrees", url: "https://teamtrees.org/" },
	{ name: "The Nature Conservancy", url: "https://www.nature.org/en-us/" },
	{ name: "The Ocean Cleanup", url: "https://theoceancleanup.com/" },
	{ name: "Tree Aid", url: "https://www.treeaid.org/" },
	{ name: "Tree-nation", url: "https://tree-nation.com/es" },
	{ name: "Treedom", url: "https://www.treedom.net/es/" },
	{ name: "Trees for Cities", url: "https://www.treesforcities.org/" },
	{ name: "Trees for Life", url: "https://treesforlife.org.uk/" },
	{ name: "Trees for the Future", url: "https://trees.org/" },
	{ name: "Trees, Water & People", url: "https://treeswaterpeople.org/" },
	{ name: "Trees4Trees", url: "https://trees4trees.org/" },
	{ name: "WeForest", url: "https://www.weforest.org/" },
	{ name: "Wildlife Conservation Society", url: "https://www.wcs.org/" },
	{ name: "Woodland Trust", url: "https://www.woodlandtrust.org.uk/" },
	{ name: "WWF", url: "https://www.worldwildlife.org/" },
];

const CharityListContainer: React.FC = () => {
	return (
		<List>
			{charities.map((charity, index) => (
				<CharityItem key={index} name={charity.name} url={charity.url} />
			))}
		</List>
	);
};

export default CharityListContainer;
