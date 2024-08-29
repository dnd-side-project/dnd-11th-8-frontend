export const formUrlEncoded = (x: Record<string, string>) =>
  Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '');
