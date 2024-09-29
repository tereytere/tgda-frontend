import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { Theme } from '../interfaces/theme.interface';
import EntryActions from '../components/EntryActions';
import { BASE_URL } from '../constants';


interface ThemesWithCRUDProps {
  themes: Theme[];
  setThemes: React.Dispatch<React.SetStateAction<Theme[]>>;
}

const ThemesWithCRUD: React.FC<ThemesWithCRUDProps> = ({
  themes,
  setThemes,
}) => {
  const [editTheme, setEditTheme] = useState<Theme | null>(null);
  const [editedThemeName, setEditedThemeName] = useState<string>('');
  const [newThemeName, setNewThemeName] = useState<string>('');

  // Fetch token from local storage
  const token = localStorage.getItem('token');

  // Create an axios instance with headers
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Handle the edit button click
  const handleEditClick = (theme: Theme) => {
    setEditTheme(theme);
    setEditedThemeName(theme.name);
  };

  // Save the edited theme name
  const handleSaveEdit = async () => {
    if (editTheme) {
      try {
        const response = await axiosInstance.put(
          `${BASE_URL}/themes/${editTheme.id}`,
          { name: editedThemeName }
        );

        console.log('Theme updated:', response.data);

        // Update local state with the new theme name
        const updatedTheme = response.data;
        const updatedThemes = themes.map(item =>
          item.id === updatedTheme.id ? updatedTheme : item
        );

        setThemes(updatedThemes);
        setEditTheme(null);
        setEditedThemeName('');
      } catch (error) {
        console.error('Error updating theme:', error);
      }
    }
  };

  // Handle deleting a theme
  const handleDeleteTheme = async (theme: Theme) => {
    try {
      await axiosInstance.delete(`${BASE_URL}/themes/${theme.id}`);
      const updatedThemes = themes.filter(item => item.id !== theme.id);
      setThemes(updatedThemes);
    } catch (error) {
      console.error('Error deleting theme:', error);
    }
  };

  // Handle adding a new theme
  const handleAddTheme = async () => {
    if (newThemeName) {
      try {
        const response = await axiosInstance.post(`${BASE_URL}/themes`, {
          name: newThemeName,
        });

        console.log('New theme created:', response.data);

        // Update local state with the new theme
        setThemes([...themes, response.data]);
        setNewThemeName('');
      } catch (error) {
        console.error('Error creating theme:', error);
      }
    }
  };

  return (
    <div className='themes-container'>
      {themes.map(theme => (
        <div key={theme.id} className='theme-item'>
          {editTheme?.id === theme.id ? (
            <div className='divform'>
              <Form.Control
                type="text"
                value={editedThemeName}
                onChange={(e) => setEditedThemeName(e.target.value)}
              />
              <Button variant="primary" onClick={handleSaveEdit}>Guardar</Button>
            </div>
          ) : (
            <div className='divform-buttons'>
              <span>{theme.name}</span>
              <EntryActions
                onEdit={() => handleEditClick(theme)}
                onDelete={() => handleDeleteTheme(theme)}
              />
            </div>
          )}
        </div>
      ))}
      <div className='theme-item'>
        <div className='divform'>
          <Form.Control
            type="text"
            value={newThemeName}
            onChange={(e) => setNewThemeName(e.target.value)}
            placeholder="Escribe el nombre del nuevo tema"
          />
          <Button variant="success" onClick={handleAddTheme}>Crear</Button>
        </div>
      </div>
    </div>
  );
};

export default ThemesWithCRUD;
