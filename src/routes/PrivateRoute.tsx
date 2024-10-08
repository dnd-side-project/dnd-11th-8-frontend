import { PropsWithChildren, useEffect } from 'react';
import useInternalRouter from '@/hooks/useInternalRouter.ts';
import { useToken } from '@/hooks/useToken.ts';

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { replace } = useInternalRouter();
  const { getRefreshToken, getAccessToken, isValidToken } = useToken();
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  useEffect(() => {
    if (!isValidToken(accessToken) && !isValidToken(refreshToken)) {
      replace('/login');
    }
  }, [accessToken, refreshToken]);

  return children;
};

export default PrivateRoute;
