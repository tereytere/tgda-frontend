import React from "react";
import { VideoContainer } from "../styledComponents/VideoStyles";

interface Props {
  url: string | null | undefined;
  title: string | null | undefined;
}

const Video: React.FC<Props> = ({ url, title }) => {
  if (!url || !title) {
    return null;
  }

  return (
    <VideoContainer>
      <iframe
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </VideoContainer>
  );
};

export default Video;
