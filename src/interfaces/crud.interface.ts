export interface EntryActionsProps<T> {
  onAdd?: () => void;
  onEdit: (item: T) => void;
  onDelete: (item: T) => void;
}