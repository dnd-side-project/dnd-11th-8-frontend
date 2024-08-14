import { useState } from 'react';

export const useEditLocation = () => {
  const [editingLocationId, setEditingLocationId] = useState<number | null>(null);

  const initializeEditingLocation = () => {
    setEditingLocationId(null);
  };

  return {
    editingLocationId,
    setEditingLocationId,
    initializeEditingLocation,
  };
};
