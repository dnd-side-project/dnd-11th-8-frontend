import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import AddPlantPage from './pages/AddPlantPage';
import SearchPlantPage from '@/pages/SearchPlantPage.tsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path={'my-plant/add'} element={<AddPlantPage />} />
          <Route path={'my-plant/search'} element={<SearchPlantPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
