export const setForm = <T, K extends keyof T>(form: T, key: K, value: T[K]) => {
  const newForm = { ...form };
  newForm[key] = value;
  return newForm;
};
