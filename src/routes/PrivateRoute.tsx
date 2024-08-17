import { useCookies } from 'react-cookie';
import { PropsWithChildren, useEffect } from 'react';
import useInternalRouter from '@/hooks/useInternalRouter.ts';

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { replace } = useInternalRouter();
  const [cookies] = useCookies(['access-token']);
  const token = cookies['access-token'];

  useEffect(() => {
    if (!token) {
      replace('/login');
    }
  }, [token, replace]);

  return children;
};

export default PrivateRoute;
