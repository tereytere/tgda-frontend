import React, { useState } from 'react';
import axios from 'axios';
import { Theme } from '../interfaces/theme.interface';
import { EntryActionsProps } from '../interfaces/crud.interface';
import EntryActions from '../components/EntryActions';
import '../components/css/themes.css';

interface ThemesWithCRUDProps<T> {
  themes: T[];
  entryActionsProps: EntryActionsProps<T>;
  setEditThemeName: React.Dispatch<React.SetStateAction<string>>;
  setThemes: React.Dispatch<React.SetStateAction<Theme[]>>;
}

const ThemesWithCRUD: React.FC<ThemesWithCRUDProps<Theme>> = ({
  themes,
  entryActionsProps,
  setEditThemeName,
  setThemes,
}) => {
  const [editTheme, setEditTheme] = useState<Theme | null>(null);
  const [editedThemeName, setEditedThemeName] = useState<string>('');

  const handleEditClick = (theme: Theme) => {
    setEditTheme(theme);
    setEditedThemeName(theme.name);
    setEditThemeName(theme.name);
  };

  const handleSaveEdit = async () => {
    if (editTheme) {
      try {
        const response = await axios.put(
          `http://localhost:8000/themes/${editTheme.id}`,
          { name: editedThemeName } // Ensure the payload matches the backend expectation
        );

        console.log('Theme updated:', response.data);

        const updatedTheme = response.data.theme;

        const updatedThemes = themes.map(item =>
          item.id === updatedTheme.id ? updatedTheme : item
        );
        setThemes(updatedThemes);

        setEditTheme(null);
        setEditedThemeName('');
        setEditThemeName('');
      } catch (error) {
        console.error('Error updating theme:', error);
      }
    }
  };

  return (
    <div className="themes-container">
      {themes.map(theme => (
        <div key={theme.id} className="theme-item">
          {editTheme?.id === theme.id ? (
            <div>
              <input
                type="text"
                value={editedThemeName}
                onChange={(e) => setEditedThemeName(e.target.value)}
                placeholder="Enter edited theme name"
              />
              <button onClick={handleSaveEdit}>Guardar</button>
            </div>
          ) : (
            <div>
              <span>{theme.name}</span>
              <EntryActions
                onEdit={() => handleEditClick(theme)}
                onDelete={() => entryActionsProps.onDelete(theme)}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ThemesWithCRUD;
