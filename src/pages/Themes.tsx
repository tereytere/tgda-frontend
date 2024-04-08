import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../interfaces/theme.interface';

const Themes: React.FC = () => {
  const [themes, setThemes] = useState<Theme[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await axios.get<Theme[]>('http://localhost:8000/themes');
        setThemes(response.data);
      } catch (error) {
        console.error('Error fetching themes:', error);
      }
    };

    fetchThemes();
  }, []);

  const handleThemeClick = (theme: Theme) => {
    navigate(`/temas/${theme.id}`); 
  };

  return (
    <div>
      <h2>Temas</h2>
      <ul>
        {themes.map(theme => (
          <li key={theme.id}>
            <Link to="#" onClick={() => handleThemeClick(theme)}>{theme.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Themes;
