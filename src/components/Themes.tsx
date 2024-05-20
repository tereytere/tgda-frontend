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
      <div className='theme-buttons'>
        {themes.map(theme => (
          <Link key={theme.id} to={`/temas/${theme.id}`}>
            <button className='theme-button'>{theme.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Themes;
