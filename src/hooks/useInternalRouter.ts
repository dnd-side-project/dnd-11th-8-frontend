import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

type RoutePath =
  | '/'
  | '/onboarding'
  | '/login'
  | '/guide'
  | '/my-plant'
  | '/my-plant/add'
  | '/profile'
  | '/profile/edit'
  | string;

const useInternalRouter = () => {
  const navigate = useNavigate();

  return useMemo(() => {
    return {
      goBack() {
        navigate(-1);
      },
      push(path: RoutePath) {
        navigate(path);
      },
      replace(path: RoutePath) {
        navigate(path, { replace: true });
      },
    };
  }, [navigate]);
};

export default useInternalRouter;
