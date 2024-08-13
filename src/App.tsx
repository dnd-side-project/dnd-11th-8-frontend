import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import AddPlantPage from './pages/AddPlantPage';
import MyPlant from './pages/MyPlant';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path={'/my-plant/add'} element={<AddPlantPage />} />
          <Route path="my-plant" element={<MyPlant />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
