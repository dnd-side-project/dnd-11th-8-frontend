import { useCookies } from 'react-cookie';
import { useCallback } from 'react';

interface SetAccessTokenParams {
  token: string;
  expiresIn: number;
}

interface SetRefreshTokenParams {
  token: string;
  expiresIn: number;
}

export const useToken = () => {
  const [cookies, setCookie] = useCookies(['access-token', 'refresh-token']);

  const setAccessToken = useCallback(
    ({ token, expiresIn }: SetAccessTokenParams) => {
      setCookie('access-token', token, {
        expires: new Date(Date.now() + expiresIn),
      });
    },
    [setCookie],
  );

  const setRefreshToken = useCallback(
    ({ token, expiresIn }: SetRefreshTokenParams) => {
      setCookie('refresh-token', token, {
        expires: new Date(Date.now() + expiresIn),
      });
    },
    [setCookie],
  );

  const getRefreshToken = useCallback(() => {
    return cookies['refresh-token'];
  }, [cookies]);

  const getAccessToken = useCallback(() => {
    return cookies['access-token'];
  }, [cookies]);

  const isValidToken = useCallback((token?: any): token is string => {
    return typeof token === 'string';
  }, []);

  return {
    setAccessToken,
    setRefreshToken,
    getRefreshToken,
    getAccessToken,
    isValidToken,
  };
};
