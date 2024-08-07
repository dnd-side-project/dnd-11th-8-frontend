import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as JotaiProvider } from 'jotai';
import { GlobalPortal } from './providers/GlobalPortal.tsx';
import { GlobalModalProvider } from './providers/GlobalModalProvider.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/libs/route.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <JotaiProvider>
      <GlobalPortal.Provider>
        <GlobalModalProvider>
          <RouterProvider router={router} />
        </GlobalModalProvider>
      </GlobalPortal.Provider>
    </JotaiProvider>
  </QueryClientProvider>,
);
