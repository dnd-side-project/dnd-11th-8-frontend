import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const keyStore = createQueryKeyStore({
  plantGuide: {
    searchPlant: null,
  },
});
