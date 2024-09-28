import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Theme } from '../interfaces/theme.interface';
import ThemesWithCRUD from '../components/ThemesWithCRUD';
import {
  List,
  ListItem,
  Linked,
} from "../styledComponents/ContentStyles";

const Themes: React.FC = () => {
  const [themes, setThemes] = useState<Theme[]>([]);

  useEffect(() => {
    fetchThemes();
  }, []);

  const fetchThemes = async () => {
    try {
      const response = await axios.get<Theme[]>('http://localhost:8000/themes');
      setThemes(response.data);
    } catch (error) {
      console.error('Error fetching themes:', error);
    }
  };

  const token = localStorage.getItem('token');

  return (
    <div className='content'>
      <h2>Temas</h2>
      {token ? (
        <ThemesWithCRUD themes={themes} setThemes={setThemes} />
      ) : (
        <List>
          {themes.map((theme) => (
            <ListItem key={theme.id}>
              <Linked>
                <Link to={`/temas/${theme.id}`}>{theme.name}</Link>
              </Linked>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Themes;
