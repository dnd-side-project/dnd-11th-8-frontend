import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as JotaiProvider } from 'jotai';
import { GlobalPortal } from './providers/GlobalPortal.tsx';
import { GlobalModalProvider } from './providers/GlobalModalProvider.tsx';
import { theme } from './styles/theme.ts';
import { ThemeProvider } from '@mui/material';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <JotaiProvider>
      <GlobalPortal.Provider>
        <GlobalModalProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </GlobalModalProvider>
      </GlobalPortal.Provider>
    </JotaiProvider>
  </QueryClientProvider>,
);
