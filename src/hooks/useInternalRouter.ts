import { useMemo } from 'react';
import { NavigateOptions, useNavigate } from 'react-router-dom';
import { routes } from '@/constants/routes.tsx';

type RoutePath = (typeof routes)[number]['path'] | string;

const useInternalRouter = () => {
  const navigate = useNavigate();

  return useMemo(() => {
    return {
      goBack() {
        navigate(-1);
      },
      push(path: RoutePath, options?: NavigateOptions) {
        navigate(path, options);
      },
      replace(path: RoutePath, options?: Omit<NavigateOptions, 'replace'>) {
        navigate(path, { ...options, replace: true });
      },
    };
  }, [navigate]);
};

export default useInternalRouter;
