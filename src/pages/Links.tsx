import React from 'react';
import { Link } from 'react-router-dom';

const Links: React.FC = () => {
  return (
    <>
      <div className='content'>
        <h2>Enlaces</h2>
        <div className='links'>
          <Link to={`/youtube/`}>YouTube</Link>
          <Link to={`/peliculas/`}>Películas</Link>
          <Link to={`/instagram/`}>Instagram</Link>
          <Link to={`/tiktok/`}>TikTok</Link>
          <Link to={`/paginasweb/`}>Páginas Web</Link>
          <Link to={`/pokemon/`}>Pokemon</Link>
        </div>
      </div>
    </>
  );
};

export default Links;
