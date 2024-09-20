import { delay, http, HttpResponse } from 'msw';
import searchResponse from './mockDatas/searchPlant.ts';
import { plantLocation } from '@/mocks/mockDatas/plantLocation.ts';
import { myPlantDetail } from '@/mocks/mockDatas/myPlantDetail.ts';
import { randomSigninData } from '@/mocks/mockDatas/randomSigninData.ts';
import { regions } from '@/mocks/mockDatas/regions.ts';
import { weathers } from '@/mocks/mockDatas/weatherMessage.ts';
import { refreshAccessTokenResponseData } from '@/mocks/mockDatas/refreshAccessToken.ts';
import { plantGuide } from '@/mocks/mockDatas/guideDetail.ts';
import { allMyPlant } from '@/mocks/mockDatas/allMyPlant.ts';
import { myPageData } from '@/mocks/mockDatas/myPageData.ts';
import { homeData } from '@/mocks/mockDatas/homeData.ts';

export const handlers = [
  http.post(import.meta.env.VITE_API_URL + '/plants', async ({ request }) => {
    await delay(1000);
    const url = new URL(request.url);
    const query = url.searchParams.get('plantName');

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

  http.post(import.meta.env.VITE_API_URL + '/users/register', async () => {
    await delay(1000);
    return HttpResponse.json({
      accessToken: 'sdf788fdfdf',
      expiresIn: 26900,
      refreshToken: 'dfd82hdfas',
      refreshTokenExpiresIn: 604800,
    });
  }),

  http.get(import.meta.env.VITE_API_URL + '/region', async ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('name');

    await delay(1000);

    if (!query || query === '') {
      return HttpResponse.json([]);
    }

    return HttpResponse.json(regions.filter((region) => region.name.includes(query)));
  }),

  http.get(import.meta.env.VITE_API_URL + '/plants/:id/period', async () => {
    await delay(1000);

    return HttpResponse.json({
      recommendedWaterDay: 3, //일
      recommendedFertilizerWeek: 2, //주
    });
  }),

  http.patch(import.meta.env.VITE_API_URL + '/myplants/:id', async () => {
    await delay(1000);

    return HttpResponse.json({
      message: '수정 되었습니다.',
    });
  }),

  http.get(import.meta.env.VITE_API_URL + '/home', async () => {
    await delay(1000);

    return HttpResponse.json(homeData);
  }),

  http.get(import.meta.env.VITE_API_URL + '/weather-message', async () => {
    await delay(1000);

    return HttpResponse.json(weathers);
  }),

  http.post(import.meta.env.VITE_API_URL + '/token', async () => {
    await delay(1000);
    return HttpResponse.json(refreshAccessTokenResponseData);
  }),

  http.get(import.meta.env.VITE_API_URL + '/plants/:id', async () => {
    await delay(1000);
    return HttpResponse.json(plantGuide);
  }),

  http.get(import.meta.env.VITE_API_URL + '/myplants', async () => {
    await delay(1000);

    return HttpResponse.json(allMyPlant);
  }),

  http.get(import.meta.env.VITE_API_URL + '/users/my', async () => {
    await delay(1000);
    return HttpResponse.json(myPageData);
  }),

  http.patch(import.meta.env.VITE_API_URL + '/users/my/nickname', async () => {
    await delay(1000);

    return HttpResponse.json({
      message: '수정 되었습니다.',
    });
  }),

  http.patch(import.meta.env.VITE_API_URL + '/users/my/alarm-status', async () => {
    await delay(1000);
    return HttpResponse.json({
      message: '수정 되었습니다.',
    });
  }),

  http.patch(import.meta.env.VITE_API_URL + '/users/my/alarm-time', async () => {
    await delay(1000);
    return HttpResponse.json({
      message: '수정 되었습니다.',
    });
  }),

  http.post(import.meta.env.VITE_API_URL + '/logout', async () => {
    await delay(1000);
    return HttpResponse.json({
      message: '로그아웃 되었습니다.',
    });
  }),

  http.delete(import.meta.env.VITE_API_URL + '/device-token', async () => {
    await delay(1000);
    return HttpResponse.json({
      message: '디바이스 토큰이 삭제되었습니다.',
    });
  }),

  http.post(import.meta.env.VITE_API_URL + '/device-token', async () => {
    await delay(1000);

    return HttpResponse.json({
      message: '디바이스 토큰이 등록되었습니다.',
    });
  }),
  http.patch(import.meta.env.VITE_API_URL + '/myplants/:id/alarm', async () => {
    await delay(1000);
    return HttpResponse.json({
      message: '알람이 수정되었습니다.',
    });
  }),

  http.post(import.meta.env.VITE_API_URL + '/myplants/:id/image', async () => {
    await delay(1000);

    return HttpResponse.json({
      message: '이미지가 등록되었습니다.',
    });
  }),

  http.patch(import.meta.env.VITE_API_URL + '/myplant/image/:id', async () => {
    await delay(1000);
    return HttpResponse.json({});
  }),
];
