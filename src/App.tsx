import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import AddPlantPage from './pages/AddPlantPage';
import MyPlant from './pages/MyPlant';
import GuideDetails from './pages/GuideDetails';
import Guide from './pages/Guide';
import MyPlantDetail from '@/pages/MyPlantDetail.tsx';
import LoginPage from '@/pages/LoginPage.tsx';
import PrivateRoute from '@/routes/PrivateRoute.tsx';
import LoginRedirectPage from '@/pages/LoginRedirectPage.tsx';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
