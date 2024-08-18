import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

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
