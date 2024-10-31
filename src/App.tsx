import { Suspense, useCallback, useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '@/routes/PrivateRoute.tsx';
import { routes } from '@/constants/routes.tsx';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';
import ErrorPage from '@/pages/ErrorPage.tsx';
import { useToken } from '@/hooks/useToken.ts';

function App() {
  const { deleteAllToken } = useToken();

  const refresh = useCallback(() => {
    window.location.reload();
  }, []);

  const authRefresh = useCallback(() => {
    deleteAllToken();
    refresh();
  }, []);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('invalid-user', authRefresh);

    return () => {
      document.removeEventListener('invalid-user', authRefresh);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          let component = route.element;

          if (route.private) {
            component = <PrivateRoute>{component}</PrivateRoute>;
          }

          if (route.suspense) {
            component = <Suspense fallback={<LoadingSpinner />}>{component}</Suspense>;
          }

          return (
            <Route
              path={route.path}
              element={component}
              key={route.path}
              errorElement={
                <ErrorPage
                  error={new Error('에러가 발생했습니다. 다시 시도해 주세요.')}
                  reset={refresh}
                />
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
