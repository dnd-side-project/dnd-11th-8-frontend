import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as JotaiProvider } from 'jotai';
import { GlobalPortal } from './providers/GlobalPortal.tsx';
import { GlobalModalProvider } from './providers/GlobalModalProvider.tsx';
import App from './App.tsx';

async function enableMocking() {
  if (import.meta.env.VITE_NODE_ENV !== 'development') {
    return;
  }

  const { server } = await import('./mocks/browser.ts');
  return server.start();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      throwOnError: true,
    },
  },
});

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <GlobalPortal.Provider>
          <GlobalModalProvider>
            <App />
          </GlobalModalProvider>
        </GlobalPortal.Provider>
      </JotaiProvider>
    </QueryClientProvider>,
  );
});
