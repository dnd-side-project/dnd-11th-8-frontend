import { lazy, Suspense, useCallback, useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ModifyNickname from './components/profile/ModifyNickname';
import PrivateRoute from '@/routes/PrivateRoute.tsx';

import Main from './pages/Main';
import LoginPage from '@/pages/LoginPage.tsx';
import LoginRedirectPage from '@/pages/LoginRedirectPage.tsx';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';

const AddPlantPage = lazy(() => import('./pages/AddPlantPage'));
const MyPlant = lazy(() => import('./pages/MyPlant'));
const GuideDetails = lazy(() => import('./pages/GuideDetails'));
const Guide = lazy(() => import('./pages/Guide'));
const MyPlantDetail = lazy(() => import('@/pages/MyPlantDetail.tsx'));
const Profile = lazy(() => import('./pages/Profile'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage.tsx'));
const MyPlantEdit = lazy(() => import('@/pages/MyPlantEdit.tsx'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const AlimDetail = lazy(() => import('@/pages/AlimDetail.tsx'));
const 서비스이용약관페이지 = lazy(() => import('./pages/서비스이용약관페이지'));
const 개인정보처리방침페이지 = lazy(() => import('@/pages/개인정보처리방침페이지.tsx'));
const MyPlantFeedPage = lazy(() => import('@/pages/MyPlantFeedPage.tsx'));

function App() {
  const refresh = useCallback(() => {
    window.location.reload();
  }, []);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          errorElement={
            <ErrorPage
              error={new Error('에러가 발생했습니다. 다시 시도해 주세요.')}
              reset={refresh}
            />
          }
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
        <Route
          path={'/my-plant/add'}
          errorElement={
            <ErrorPage
              error={new Error('에러가 발생했습니다. 다시 시도해 주세요.')}
              reset={refresh}
            />
          }
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PrivateRoute>
                <AddPlantPage />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path="my-plant"
          errorElement={
            <ErrorPage
              error={new Error('에러가 발생했습니다. 다시 시도해 주세요.')}
              reset={refresh}
            />
          }
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PrivateRoute>
                <MyPlant />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path={'/my-plant/:plantId'}
          errorElement={
            <ErrorPage
              error={new Error('에러가 발생했습니다. 다시 시도해 주세요.')}
              reset={refresh}
            />
          }
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PrivateRoute>
                <MyPlantDetail />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path={'/my-plant/:plantId/feed'}
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <MyPlantFeedPage />
            </Suspense>
          }
        />
        <Route
          path={'/my-plant/edit/:myPlantId'}
          errorElement={
            <ErrorPage
              error={new Error('에러가 발생했습니다. 다시 시도해 주세요.')}
              reset={refresh}
            />
          }
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PrivateRoute>
                <MyPlantEdit />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path="/guide/:id"
          errorElement={
            <ErrorPage
              error={new Error('에러가 발생했습니다. 다시 시도해 주세요.')}
              reset={refresh}
            />
          }
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PrivateRoute>
                <GuideDetails />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path="/guide"
          errorElement={
            <ErrorPage
              error={new Error('에러가 발생했습니다. 다시 시도해 주세요.')}
              reset={refresh}
            />
          }
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PrivateRoute>
                <Guide />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path={'/redirect'} element={<LoginRedirectPage />} />
        <Route path={'/login/register'} element={<RegisterPage />} />
        <Route
          path="/profile"
          errorElement={
            <ErrorPage
              error={new Error('에러가 발생했습니다. 다시 시도해 주세요.')}
              reset={refresh}
            />
          }
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path="/profile/edit"
          errorElement={
            <ErrorPage
              error={new Error('에러가 발생했습니다. 다시 시도해 주세요.')}
              reset={refresh}
            />
          }
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PrivateRoute>
                <ModifyNickname />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path={'/profile/notification'}
          errorElement={
            <ErrorPage
              error={new Error('에러가 발생했습니다. 다시 시도해 주세요.')}
              reset={refresh}
            />
          }
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PrivateRoute>
                <AlimDetail />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path={'/terms/service'}
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <서비스이용약관페이지 />
            </Suspense>
          }
        />
        <Route
          path="/terms/privacy"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <개인정보처리방침페이지 />
            </Suspense>
          }
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
