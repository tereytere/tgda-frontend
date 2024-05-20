import React from "react";

interface Props {
  url: string | null | undefined;
}

const Podcast: React.FC<Props> = ({ url }) => {
  if (!url) {
    return null;
  }

  return (
    <div className='podcast-container'>
      <iframe
        src={url}
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: '12px' }}
      ></iframe>
    </div>
  );
};

export default Podcast;
