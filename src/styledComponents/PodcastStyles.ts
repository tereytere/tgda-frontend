import styled from "styled-components";

export const PodcastContainer = styled.div`
	.podcast-container {
		flex: 0 0 500px;
		height: 352px;
		margin-right: 20px;

		iframe {
			width: 100%;
			height: 100%;
			border: 0;
			border-radius: 12px;
		}
	}

	@media (max-width: 480px) {
		.podcast-container {
			flex: 0 0 300px;
			height: 180px;
		}
	}

	@media (min-width: 768px) {
		.podcast-container {
			flex: 0 0 500px;
			height: 250px;
		}
	}
`;
