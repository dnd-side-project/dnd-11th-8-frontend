import { useMemo } from 'react';
import { NavigateOptions, useNavigate } from 'react-router-dom';

type RoutePath =
  | '/'
  | '/my-plant'
  | '/my-plant/add'
  | `/my-plant/edit/${number}`
  | '/guide'
  | `/guide/${number}`
  | '/profile/edit'
  | '/login'
  | '/redirect'
  | '/login/register'
  | '/profile/notification'
  | '/profile'
  | '/terms/service'
  | '/terms/privacy'
  | string;

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
