import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as JotaiProvider } from 'jotai';
import { GlobalPortal } from '@/providers/GlobalPortal.tsx';
import { GlobalModalProvider } from '@/providers/GlobalModalProvider.tsx';
import { PropsWithChildren } from 'react';
import { MemoryRouter } from 'react-router-dom';

interface WrapperProps extends PropsWithChildren {
  initialEntries?: string[];
}

export const Wrapper = ({ children, initialEntries }: WrapperProps) => {
  const queryClient = new QueryClient({});
  return (
    <JotaiProvider>
      <GlobalPortal.Provider>
        <GlobalModalProvider>
          <QueryClientProvider client={queryClient}>
            <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
          </QueryClientProvider>
          ;
        </GlobalModalProvider>
      </GlobalPortal.Provider>
    </JotaiProvider>
  );
};
