import { createBrowserRouter } from 'react-router-dom';
import AddPlantPage from '@/pages/AddPlantPage.tsx';

export const router = createBrowserRouter([
  {
    path: 'my-plant/add',
    element: <AddPlantPage />,
  },
]);
