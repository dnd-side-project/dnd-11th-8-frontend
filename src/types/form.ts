export type FormType<T> = {
  [K in keyof T]: {
    value: T[K];
    required: null extends T[K] ? false : true;
  };
};
