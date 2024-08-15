import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import AddPlantPage from './pages/AddPlantPage';
import MyPlant from './pages/MyPlant';
import GuideDetails from './pages/GuideDetails';
import Guide from './pages/Guide';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path={'/my-plant/add'} element={<AddPlantPage />} />
          <Route path="my-plant" element={<MyPlant />} />
          <Route path="/guide/:id" element={<GuideDetails />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
