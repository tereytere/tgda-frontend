import React from 'react';
import { Link } from 'react-router-dom';

const Links: React.FC = () => {
  return (
    <div className="content">
      <h2>
        <Link to={`/instagram/`}>Instagram</Link>
        <br />
        <Link to={`/paginasweb/`}>Páginas Web</Link>
        <br />
        <Link to={`/youtube/`}>YouTube</Link>
      </h2>
    </div>
  );
};

export default Links;
