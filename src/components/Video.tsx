import React from "react";

interface Props {
  url: string | null | undefined;
  title: string | null | undefined;
}

const Video: React.FC<Props> = ({ url, title }) => {
  if (!url) {
    return null;
  }
  if (!title) {
    return null;
  }

  return (
    <div className='video-container'>
      <iframe
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
