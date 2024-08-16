export const getEndDayOfMonth = (year: number, month: number): number => {
  const date = new Date(year, month, 0);

  return date.getDate();
};
