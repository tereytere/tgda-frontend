import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Theme } from '../interfaces/theme.interface';
import Themes from '../components/Themes';

const Home: React.FC = () => {
  const [themes, setThemes] = useState<Theme[]>([]);

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

  return (
    <div className='content'>
      <h1>Tu Granito de Arena</h1>
      <Themes themes={themes} />
    </div>
  );
};

export default Home;
