import { delay, http, HttpResponse } from 'msw';
import searchResponse from './mockDatas/searchPlant.ts';
import { plantLocation } from '@/mocks/mockDatas/plantLocation.ts';
import { myPlantDetail } from '@/mocks/mockDatas/myPlantDetail.ts';
import { randomSigninData } from '@/mocks/mockDatas/randomSigninData.ts';

export const handlers = [
  http.get(import.meta.env.VITE_API_URL + '/plants', async ({ request }) => {
    await delay(1000);
    const url = new URL(request.url);
    const query = url.searchParams.get('search');

    if (!query) {
      return HttpResponse.json([]);
    }

    return HttpResponse.json(searchResponse.filter((plant) => plant.name.includes(query)));
  }),

  http.post(import.meta.env.VITE_API_URL + '/location', async ({ request: req }) => {
    await delay(1000);
    const body = (await req.json()) as { name: string };
    return HttpResponse.json({
      id: 1,
      name: body.name,
    });
  }),

  http.get(import.meta.env.VITE_API_URL + '/location', async () => {
    await delay(1000);

    return HttpResponse.json(plantLocation);
  }),

  http.patch(import.meta.env.VITE_API_URL + '/location/:id', async ({ request: req, params }) => {
    const body = (await req.json()) as { name: string };
    const id = params.id;

    return HttpResponse.json({
      id: id,
      name: body.name,
    });
  }),

  http.delete(import.meta.env.VITE_API_URL + '/location/:id', async ({ params }) => {
    const id = params.id;

    return HttpResponse.json({
      id: id,
    });
  }),

  http.post(import.meta.env.VITE_API_URL + '/myplants', async () => {
    await delay(1000);

    return HttpResponse.json({
      myPlantId: 1,
      message: '등록 되었습니다.',
    });
  }),

  http.get(import.meta.env.VITE_API_URL + '/myplants/:id', async () => {
    await delay(1000);
    return HttpResponse.json(myPlantDetail);
  }),

  http.post(import.meta.env.VITE_API_URL + '/login/kakao', async () => {
    await delay(1000);
    // 0 과 1 둘 중 하나의 데이터를 랜덤하게 반환
    return HttpResponse.json(randomSigninData[0]);
  }),

  http.post(import.meta.env.VITE_API_URL + '/login/apple', async () => {
    await delay(1000);
    // 0 과 1 둘 중 하나의 데이터를 랜덤하게 반환
    return HttpResponse.json(randomSigninData[1]);
  }),
];
