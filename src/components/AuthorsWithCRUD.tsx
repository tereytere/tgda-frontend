import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { Author } from '../interfaces/author.interface';
import { Theme } from '../interfaces/theme.interface';
import EntryActions from '../components/EntryActions';
import { BASE_URL } from '../constants';


interface AuthorsWithCRUDProps {
  authors: Author[];
  setAuthors: React.Dispatch<React.SetStateAction<Author[]>>;
  themes: Theme[];
  setThemes: React.Dispatch<React.SetStateAction<Theme[]>>;
}

const AuthorsWithCRUD: React.FC<AuthorsWithCRUDProps> = ({
  authors,
  setAuthors,
  themes,
}) => {
  const [editAuthor, setEditAuthor] = useState<Author | null>(null);
  const [editedAuthorData, setEditedAuthorData] = useState<Partial<Author>>({});
  const [newAuthorData, setNewAuthorData] = useState<Partial<Author>>({
    name: '',
    themes: [],
  });

  // Fetch token from local storage
  const token = localStorage.getItem('token');

  // Create an axios instance with headers
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Handle the edit button click
  const handleEditClick = (author: Author) => {
    setEditAuthor(author);
    setEditedAuthorData({ ...author, themes: author.themes || [] });
  };

  // Handle saving the edited author
  const handleSaveEdit = async () => {
    if (editAuthor) {
      try {
        const response = await axiosInstance.put(
          `${BASE_URL}/authors/${editAuthor.id}`,
          editedAuthorData
        );
        const updatedAuthor = response.data;

        // Update authors in the state
        const updatedAuthors = authors.map((item) =>
          item.id === updatedAuthor.id ? updatedAuthor : item
        );
        setAuthors(updatedAuthors);

        // Reset editing state
        setEditAuthor(null);
        setEditedAuthorData({});
      } catch (error) {
        console.error('Error updating author:', error);
      }
    }
  };

  // Handle adding a new author
  const handleAddAuthor = async () => {
    if (newAuthorData.name) {
      try {
        const response = await axiosInstance.post(
          `${BASE_URL}/authors`,
          newAuthorData
        );

        console.log('New author created:', response.data);

        // Add new author to the list
        setAuthors([...authors, response.data]);

        // Reset new author fields
        setNewAuthorData({ name: '', themes: [] });
      } catch (error) {
        console.error('Error creating author:', error);
      }
    }
  };

  const handleThemeChange = (theme: Theme, isEditing: boolean) => {
    if (isEditing) {
      const updatedThemes = editedAuthorData.themes || [];
      if (updatedThemes.some((t) => t.id === theme.id)) {
        setEditedAuthorData({
          ...editedAuthorData,
          themes: updatedThemes.filter((t) => t.id !== theme.id),
        });
      } else {
        setEditedAuthorData({
          ...editedAuthorData,
          themes: [...updatedThemes, theme],
        });
      }
    } else {
      const updatedNewThemes = newAuthorData.themes || [];
      if (updatedNewThemes.some((t) => t.id === theme.id)) {
        setNewAuthorData({
          ...newAuthorData,
          themes: updatedNewThemes.filter((t) => t.id !== theme.id),
        });
      } else {
        setNewAuthorData({
          ...newAuthorData,
          themes: [...updatedNewThemes, theme],
        });
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    isEditing: boolean
  ) => {
    const { name, value } = e.target;
    if (isEditing) {
      setEditedAuthorData({
        ...editedAuthorData,
        [name]: value,
      });
    } else {
      setNewAuthorData({
        ...newAuthorData,
        [name]: value,
      });
    }
  };

  // Handle deleting an author
  const handleDeleteAuthor = async (author: Author) => {
    try {
      await axiosInstance.delete(`${BASE_URL}/authors/${author.id}`);

      // Remove deleted author from the state
      const updatedAuthors = authors.filter((item) => item.id !== author.id);
      setAuthors(updatedAuthors);
    } catch (error) {
      console.error('Error deleting author:', error);
    }
  };

  return (
    <div className="authors-container">
      {/* Existing authors */}
      {authors.map((author) => (
        <div key={author.id} className="author-item">
          {editAuthor?.id === author.id ? (
            <div className="divform">
              <Form.Control
                type="text"
                name="name"
                value={editedAuthorData.name || ''}
                onChange={(e) => handleInputChange(e, true)}
                placeholder="Author Name"
              />
              <Form.Control
                type="text"
                name="image"
                value={editedAuthorData.image || ''}
                onChange={(e) => handleInputChange(e, true)}
                placeholder="Image URL"
              />
              <Form.Control
                type="text"
                name="youtube"
                value={editedAuthorData.youtube || ''}
                onChange={(e) => handleInputChange(e, true)}
                placeholder="YouTube URL"
              />
              <Form.Control
                type="text"
                name="instagram"
                value={editedAuthorData.instagram || ''}
                onChange={(e) => handleInputChange(e, true)}
                placeholder="Instagram"
              />
              <Form.Control
                type="text"
                name="tiktok"
                value={editedAuthorData.tiktok || ''}
                onChange={(e) => handleInputChange(e, true)}
                placeholder="TikTok"
              />
              <Form.Control
                type="text"
                name="podcast"
                value={editedAuthorData.podcast || ''}
                onChange={(e) => handleInputChange(e, true)}
                placeholder="Podcast"
              />
              <Form.Control
                type="text"
                name="webpage"
                value={editedAuthorData.webpage || ''}
                onChange={(e) => handleInputChange(e, true)}
                placeholder="Página Web"
              />
              <Form.Control
                type="text"
                name="language"
                value={editedAuthorData.language || ''}
                onChange={(e) => handleInputChange(e, true)}
                placeholder="Idioma"
              />
              {/* Themes */}
              {themes.map((theme) => (
                <label key={theme.id}>
                  <input
                    type="checkbox"
                    checked={
                      editedAuthorData.themes?.some((t) => t.id === theme.id) || false
                    }
                    onChange={() => handleThemeChange(theme, true)}
                  />
                  {theme.name}
                </label>
              ))}
              <Button variant="primary" onClick={handleSaveEdit}>
                Guardar
              </Button>
            </div>
          ) : (
            <div className="divform-buttons">
              <span>{author.name}</span>
              {author.themes?.map((theme) => (
                <span key={theme.id}>{theme.name}</span>
              ))}
              <EntryActions
                onEdit={() => handleEditClick(author)}
                onDelete={() => handleDeleteAuthor(author)}
              />
            </div>
          )}
        </div>
      ))}

      {/* Add new author */}
      <div className="author-item">
        <div className="divform">
          <Form.Control
            type="text"
            name="name"
            value={newAuthorData.name || ''}
            onChange={(e) => handleInputChange(e, false)}
            placeholder="Enter new author name"
          />
          <Form.Control
            type="text"
            name="image"
            value={newAuthorData.image || ''}
            onChange={(e) => handleInputChange(e, false)}
            placeholder="Image URL"
          />
          <Form.Control
            type="text"
            name="youtube"
            value={newAuthorData.youtube || ''}
            onChange={(e) => handleInputChange(e, false)}
            placeholder="YouTube URL"
          />
          <Form.Control
            type="text"
            name="instagram"
            value={newAuthorData.instagram || ''}
            onChange={(e) => handleInputChange(e, false)}
            placeholder="Instagram"
          />
          <Form.Control
            type="text"
            name="tiktok"
            value={newAuthorData.tiktok || ''}
            onChange={(e) => handleInputChange(e, true)}
            placeholder="TikTok"
          />
          <Form.Control
            type="text"
            name="podcast"
            value={newAuthorData.podcast || ''}
            onChange={(e) => handleInputChange(e, true)}
            placeholder="Podcast"
          />
          <Form.Control
            type="text"
            name="webpage"
            value={newAuthorData.webpage || ''}
            onChange={(e) => handleInputChange(e, true)}
            placeholder="Página Web"
          />
          <Form.Control
            type="text"
            name="language"
            value={newAuthorData.language || ''}
            onChange={(e) => handleInputChange(e, true)}
            placeholder="Idioma"
          />
          {/* Themes */}
          {themes.map((theme) => (
            <label key={theme.id}>
              <input
                type="checkbox"
                checked={
                  newAuthorData.themes?.some((t) => t.id === theme.id) || false
                }
                onChange={() => handleThemeChange(theme, false)}
              />
              {theme.name}
            </label>
          ))}
          <Button variant="success" onClick={handleAddAuthor}>
            Crear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthorsWithCRUD;
