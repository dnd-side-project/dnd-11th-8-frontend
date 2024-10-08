import { lazy } from 'react';

import ModifyNickname from '@/components/profile/ModifyNickname';

import Main from '@/pages/Main';
import LoginPage from '@/pages/LoginPage.tsx';
import LoginRedirectPage from '@/pages/LoginRedirectPage.tsx';

const AddPlantPage = lazy(() => import('@/pages/AddPlantPage'));
const MyPlant = lazy(() => import('@/pages/MyPlant'));
const GuideDetails = lazy(() => import('@/pages/GuideDetails'));
const Guide = lazy(() => import('@/pages/Guide'));
const MyPlantDetail = lazy(() => import('@/pages/MyPlantDetail.tsx'));
const Profile = lazy(() => import('@/pages/Profile'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage.tsx'));
const MyPlantEdit = lazy(() => import('@/pages/MyPlantEdit.tsx'));
const ErrorPage = lazy(() => import('@/pages/ErrorPage'));
const AlimDetail = lazy(() => import('@/pages/AlimDetail.tsx'));
const 서비스이용약관페이지 = lazy(() => import('@/pages/서비스이용약관페이지'));
const 개인정보처리방침페이지 = lazy(() => import('@/pages/개인정보처리방침페이지.tsx'));
const MyPlantFeedPage = lazy(() => import('@/pages/MyPlantFeedPage.tsx'));

// 라우트 배열 정의
export const routes = [
  {
    path: '/' as const,
    element: <Main />,
    private: true,
    suspense: false,
  },
  // ------내 식물 관련 페이지------
  {
    path: '/my-plant' as const,
    element: <MyPlant />,
    private: true,
    suspense: true,
  },
  {
    path: '/my-plant/add' as const,
    element: <AddPlantPage />,
    private: true,
    suspense: true,
  },
  //------내식물 상세 관련 페이지------
  {
    path: '/my-plant/:plantId' as const,
    element: <MyPlantDetail />,
    private: true,
    suspense: true,
  },
  {
    path: '/my-plant/:plantId/feed' as const,
    element: <MyPlantFeedPage />,
    private: true,
    suspense: true,
  },
  {
    path: '/my-plant/edit/:myPlantId' as const,
    element: <MyPlantEdit />,
    private: true,
    suspense: true,
  },
  // ------가이드 관련 페이지------
  {
    path: '/guide' as const,
    element: <Guide />,
    private: true,
    suspense: true,
  },
  {
    path: '/guide/:id' as const,
    element: <GuideDetails />,
    private: true,
    suspense: true,
  },
  // ------로그인 관련 페이지------
  {
    path: '/login' as const,
    element: <LoginPage />,
    private: false,
    suspense: false,
  },
  {
    path: '/redirect' as const,
    element: <LoginRedirectPage />,
    private: false,
    suspense: false,
  },
  {
    path: '/login/register' as const,
    element: <RegisterPage />,
    private: false,
    suspense: false,
  },
  // ------프로필 관련 페이지------
  {
    path: '/profile' as const,
    element: <Profile />,
    private: true,
    suspense: true,
  },
  {
    path: '/profile/edit' as const,
    element: <ModifyNickname />,
    private: true,
    suspense: true,
  },
  {
    path: '/profile/notification' as const,
    element: <AlimDetail />,
    private: true,
    suspense: true,
  },
  // ------약관 관련 페이지------
  {
    path: '/terms/service' as const,
    element: <서비스이용약관페이지 />,
    private: false,
    suspense: true,
  },
  {
    path: '/terms/privacy' as const,
    element: <개인정보처리방침페이지 />,
    private: false,
    suspense: true,
  },
  // ------에러 페이지------
  {
    path: '/*' as const,
    element: <ErrorPage />,
    private: false,
    suspense: false,
  },
];
