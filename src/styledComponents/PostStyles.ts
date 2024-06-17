import styled from "styled-components";

export const BookItem = styled.div`
	margin-bottom: 20px;

	h3 {
		margin-bottom: 10px;
	}

	.book-details {
		display: flex;
		align-items: flex-start;
	}

	.image-container {
		flex: 0 0 300px;
		margin-right: 20px;

		img {
			width: 100%;
			height: auto;
		}
	}

	.text-container {
		flex: 1;
	}

	@media (max-width: 480px) {
		.image-container {
			flex: 0 0 250px;
		}
	}

	@media (min-width: 768px) {
		.image-container {
			flex: 0 0 400px;
		}
	}

	@media (min-width: 1920px) {
		.image-container {
			flex: 0 0 300px;
			margin-right: 20px;
		}
	}
`;

export const YouTubeItem = styled.div`
	margin-bottom: 20px;

	h3 {
		margin-bottom: 10px;
	}

	@media (min-width: 768px) {
		.video-container {
			flex: 0 0 500px;
			height: 250px;
		}
	}

	@media (min-width: 1920px) {
		.video-container {
			flex: 0 0 500px;
			height: 281px;
			margin-right: 20px;
		}
	}
`;
