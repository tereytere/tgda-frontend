import React from 'react';
import { Link } from 'react-router-dom';
import { Theme } from '../interfaces/theme.interface';
import '../components/css/themes.css';

interface ThemesProps {
  themes: Theme[];
}

const Themes: React.FC<ThemesProps> = ({ themes }) => {
  return (
    <div className='themes-container'>
      {themes.map(theme => (
        <Link key={theme.id} to={`/temas/${theme.id}`}>
          {theme.name}
        </Link>
      ))}
    </div>
  );
};

export default Themes;
