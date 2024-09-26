import styled from "styled-components";

export const MapContainerWrapper = styled.div`
	.leaflet-container {
		height: 80vh;
		width: 100%;
		z-index: 0;
	}

	.legend {
		position: absolute;
		top: 20px;
		right: 20px;
		background-color: white;
		border-radius: 5px;
		padding: 10px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		z-index: 1000;
	}

	.legend-item {
		display: flex;
		align-items: center;
		margin-bottom: 5px;
		cursor: pointer;

		span {
			margin-left: 5px;
		}
	}

	@media (max-width: 480px) {
		.legend {
			font-size: 0.9rem;
		}
	}

	@media (min-width: 768px) {
		.legend {
			font-size: 1rem;
		}
	}

	@media (min-width: 1920px) {
		.legend {
			font-size: 1rem;
		}
	}
`;
