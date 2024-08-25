export const parseOrUndefined = (value: string | undefined) => {
  if (value === undefined) {
    return undefined;
  }
  return parseInt(value, 10);
};
