import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Theme } from '../interfaces/theme.interface';
import ThemesWithCRUD from '../components/ThemesWithCRUD';

const Themes: React.FC = () => {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [newThemeName, setNewThemeName] = useState<string>('');
  const [editThemeName, setEditThemeName] = useState<string>('');

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

  const handleAddTheme = async () => {
    try {
      const response = await axios.post<Theme>('http://localhost:8000/theme', {
        name: newThemeName, // Use the newThemeName value from the input box
      });

      // Use the response if needed
      console.log('Theme added:', response.data);

      // Wait for the POST request to complete and then fetch themes again
      await fetchThemes();

      // Clear the input box after adding
      setNewThemeName('');
    } catch (error) {
      console.error('Error adding theme:', error);
    }
  };

  const handleEditTheme = async (theme: Theme) => {
    try {
      console.log('Edited theme name:', editThemeName); // Log the edited theme name

      const response = await axios.put(`http://localhost:8000/themes/${theme.id}`, {
        name: editThemeName,
      }, {
        headers: {
          'Content-Type': 'application/json', // Set the Content-Type header
        },
      });

      // Log the response if needed
      console.log('Theme updated:', response.data);

      // Update the themes list after editing
      const updatedThemes = themes.map(item =>
        item.id === theme.id ? { ...item, name: editThemeName } : item
      );
      setThemes(updatedThemes);
    } catch (error) {
      console.error('Error editing theme:', error);
    }
  };

  const handleDeleteTheme = async (theme: Theme) => {
    try {
      await axios.delete(`http://localhost:8000/themes/${theme.id}`);

      const updatedThemes = themes.filter(item => item.id !== theme.id);
      setThemes(updatedThemes);
    } catch (error) {
      console.error('Error deleting theme:', error);
    }
  };

  return (
    <div className='content'>
      <h2>Temas</h2>
      <ThemesWithCRUD
        themes={themes}
        entryActionsProps={{
          onEdit: handleEditTheme,
          onDelete: handleDeleteTheme,
        }}
        setEditThemeName={setEditThemeName}
        setThemes={setThemes} // Include setThemes in the props
      />
      <div className='adding'>
        <input
          type="text"
          value={newThemeName}
          onChange={(e) => setNewThemeName(e.target.value)}
          placeholder="Enter new theme name"
        />
        <button onClick={handleAddTheme} className='add-entry-button'>Añadir Tema</button>
      </div>
    </div>
  );
};

export default Themes;