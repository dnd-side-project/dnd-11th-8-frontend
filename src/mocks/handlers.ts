import { delay, http, HttpResponse } from 'msw';
import searchResponse from './mockDatas/searchPlant.ts';

export const handlers = [
  http.get(import.meta.env.VITE_API_URL + '/plants', async () => {
    await delay(1000);
    return HttpResponse.json(searchResponse);
  }),
];
