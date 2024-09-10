export const parseIdParams = (params: string | undefined): number | undefined => {
  if (!params) {
    return;
  }
  return Number(params);
};
