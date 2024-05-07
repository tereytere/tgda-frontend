import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  return (
    <div className='content'>
      <h1>Tu Granito de Arena</h1>
      <h2>
        <Link to={`/temas/`}>Temas</Link>
        <br></br>
        <Link to={`/autores/`}>Autores</Link>
        <br></br>
        <Link to={`/posts/`}>Posts</Link>
        <br></br>
        <Link to={`/pokemon/`}>Pokemon</Link>
      </h2>
    </div>
  );
};

export default Home;
