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

		@media (min-width: 768px) {
			img {
				max-width: 50vw;
				max-height: 80vh;
			}
		}

		@media (min-width: 1920px) {
			img {
				max-width: 50vw;
				max-height: 80vh;
			}
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

export const StyledImage = styled.img`
	max-width: 100%;
	height: auto;
	padding-top: 10px;
	padding-bottom: 10px;
`;

export const StyledIcon = styled.div`
	svg {
		color: var(--border-color);
		transition: color 0.3s;

		&:hover {
			color: blue;
		}
	}
`;

export const SocialMediaContainer = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	padding-top: 10px;
	padding-bottom: 10px;

	@media (max-width: 480px) {
		flex-direction: column;
		gap: 0.5rem;
	}
`;

export const MultimediaTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MultimediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-right: 0;
    margin-bottom: 0;

    div {
      margin-right: 20px;
    }
  }
`;

export const MultimediaContentContainer = styled.div`
  flex: 2;

  .content-container {
    text-align: left;
  }
`;