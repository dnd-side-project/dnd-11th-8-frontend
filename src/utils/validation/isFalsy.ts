export const isFalsy = (value: unknown): boolean => {
  if (value === '') return true;
  if (value === null) return true;
  return value === undefined;
};
