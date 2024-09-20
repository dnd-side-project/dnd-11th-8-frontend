import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import AddPlantPage from './pages/AddPlantPage';
import MyPlant from './pages/MyPlant';
import GuideDetails from './pages/GuideDetails';
import Guide from './pages/Guide';
import MyPlantDetail from '@/pages/MyPlantDetail.tsx';
import Profile from './pages/Profile';
import ModifyNickname from './components/profile/ModifyNickname';
import LoginPage from '@/pages/LoginPage.tsx';
import PrivateRoute from '@/routes/PrivateRoute.tsx';
import LoginRedirectPage from '@/pages/LoginRedirectPage.tsx';
import RegisterPage from '@/pages/RegisterPage.tsx';
import MyPlantEdit from '@/pages/MyPlantEdit.tsx';
import AlimDetail from '@/pages/AlimDetail.tsx';
import ErrorPage from './pages/ErrorPage';
import { useCallback, useEffect } from 'react';
import 서비스이용약관페이지 from './pages/서비스이용약관페이지';
import 개인정보처리방침페이지 from '@/pages/개인정보처리방침페이지.tsx';
import MyPlantFeedPage from '@/pages/MyPlantFeedPage.tsx';

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
            <PrivateRoute>
              <AddPlantPage />
            </PrivateRoute>
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
            <PrivateRoute>
              <MyPlant />
            </PrivateRoute>
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
            <PrivateRoute>
              <MyPlantDetail />
            </PrivateRoute>
          }
        />
        <Route path={'/my-plant/:plantId/feed'} element={<MyPlantFeedPage />} />
        <Route
          path={'/my-plant/edit/:myPlantId'}
          errorElement={
            <ErrorPage
              error={new Error('에러가 발생했습니다. 다시 시도해 주세요.')}
              reset={refresh}
            />
          }
          element={
            <PrivateRoute>
              <MyPlantEdit />
            </PrivateRoute>
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
            <PrivateRoute>
              <GuideDetails />
            </PrivateRoute>
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
            <PrivateRoute>
              <Guide />
            </PrivateRoute>
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
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
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
            <PrivateRoute>
              <ModifyNickname />
            </PrivateRoute>
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
            <PrivateRoute>
              <AlimDetail />
            </PrivateRoute>
          }
        />
        <Route path={'/terms/service'} element={<서비스이용약관페이지 />} />
        <Route path="/terms/privacy" element={<개인정보처리방침페이지 />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
