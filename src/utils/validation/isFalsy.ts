export const isFalsy = (value: unknown): boolean => {
  if (value === 0) return true;
  if (value === '') return true;
  if (value === null) return true;
  if (value === undefined) return true;
  return value === false;
};
