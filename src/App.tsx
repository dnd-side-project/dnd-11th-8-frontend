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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            }
          />
          <Route
            path={'/my-plant/add'}
            element={
              <PrivateRoute>
                <AddPlantPage />
              </PrivateRoute>
            }
          />
          <Route
            path="my-plant"
            element={
              <PrivateRoute>
                <MyPlant />
              </PrivateRoute>
            }
          />
          <Route
            path={'/my-plant/:plantId'}
            element={
              <PrivateRoute>
                <MyPlantDetail />
              </PrivateRoute>
            }
          />
          <Route
            path={'/my-plant/edit/:myPlantId'}
            element={
              <PrivateRoute>
                <MyPlantEdit />
              </PrivateRoute>
            }
          />
          <Route
            path="/guide/:id"
            element={
              <PrivateRoute>
                <GuideDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/guide"
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
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/edit"
            element={
              <PrivateRoute>
                <ModifyNickname />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
