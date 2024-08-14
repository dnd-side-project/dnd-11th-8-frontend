import { useState } from 'react';

export const useNewLocation = () => {
  const [newLocationName, setNewLocationName] = useState('');
  const [isError, setIsError] = useState(false);

  const initializeNewLocation = () => {
    setNewLocationName('');
    setIsError(false);
  };

  const changeNewLocationName = (value: string) => {
    setIsError(false);
    if (value.length > 4) {
      setIsError(true);
    }
    setNewLocationName(value);
  };

  return {
    isError,
    changeNewLocationName,
    newLocationName,
    initializeNewLocation,
  };
};
