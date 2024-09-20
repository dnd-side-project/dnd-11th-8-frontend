import { ChangeEvent } from 'react';

export const getFile = (e: ChangeEvent<HTMLInputElement>) => {
  return e.target.files?.[0];
};
