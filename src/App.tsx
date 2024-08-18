import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import AddPlantPage from './pages/AddPlantPage';
import MyPlant from './pages/MyPlant';
import GuideDetails from './pages/GuideDetails';
import Guide from './pages/Guide';
import MyPlantDetail from '@/pages/MyPlantDetail.tsx';
import Profile from './pages/Profile';
import ModifyNickname from './components/profile/ModifyNickname';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path={'/my-plant/add'} element={<AddPlantPage />} />
          <Route path="my-plant" element={<MyPlant />} />
          <Route path={'/my-plant/:plantId'} element={<MyPlantDetail />} />
          <Route path="/guide/:id" element={<GuideDetails />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<ModifyNickname />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
