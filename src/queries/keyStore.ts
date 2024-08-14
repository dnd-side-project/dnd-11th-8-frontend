import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const keyStore = createQueryKeyStore({
  plantGuide: {
    searchPlant: null,
  },
  location: {
    addNewLocation: null,
    getAllLocation: null,
    updateLocation: null,
    deleteLocation: null,
  },
});
