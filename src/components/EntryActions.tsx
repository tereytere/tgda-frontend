import React from 'react';
import { EntryActionsProps } from '../interfaces/crud.interface';

type EntryActionsType<T> = React.FC<EntryActionsProps<T>>;

const EntryActions: EntryActionsType<unknown> = ({ onEdit, onDelete }) => {
  const handleEditClick = (item: unknown) => {
    // Pass the item parameter to onEdit
    onEdit(item);
  };

  const handleDeleteClick = (item: unknown) => {
    // Pass the item parameter to onDelete
    onDelete(item);
  };

  return (
    <div>
      {/* Edit and Delete buttons */}
      <button onClick={() => handleEditClick(null)}>Editar</button>
      <button onClick={() => handleDeleteClick(null)}>Borrar</button>
    </div>
  );
};

export default EntryActions;
