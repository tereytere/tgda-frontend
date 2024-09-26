import styled from "styled-components";

export const PodcastContainer = styled.div`
	flex: 0 0 500px;
	height: 352px;
	width: calc(100vh * 0.5625); /* 16:9 aspect ratio (9 / 16) */
	margin-right: 20px;
	border-radius: 12px;
	padding-right: 10px;

	iframe {
		width: 100%;
		height: 100%;
		border: 0;
		border-radius: 12px;
	}

	@media (max-width: 480px) {
		flex: 0 0 300px;
		height: 180px;
		width: calc(100vh * 0.75); /* 4:3 aspect ratio (3 / 4) */
		margin-right: 0;
	}

	@media (min-width: 768px) {
		flex: 0 0 500px;
		height: 250px;
		margin-right: 0;
	}

	@media (min-width: 1920px) {
		flex: 0 0 500px;
		height: 281px;
		margin-right: 20px;
	}
`;

export const ContentContainer = styled.div`
	flex: 1;
`;

export const VideoTextContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
`;
