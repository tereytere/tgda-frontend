import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { EntryActionsProps } from '../interfaces/crud.interface';

const EntryActions: React.FC<EntryActionsProps> = ({ onEdit, onDelete }) => {
  return (
    <div>
      <Button variant="warning" onClick={onEdit}><FontAwesomeIcon icon={faPen} /></Button>
      <Button variant="danger" onClick={onDelete}><FontAwesomeIcon icon={faTrash} /></Button>
    </div>
  );
};

export default EntryActions;
