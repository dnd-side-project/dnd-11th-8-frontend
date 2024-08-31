import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSignIn } from '@/queries/useSignIn.ts';
import useInternalRouter from '@/hooks/useInternalRouter.ts';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';
import { SECOND } from '@/constants/day.ts';
import { useToken } from '@/hooks/useToken.ts';

const LoginRedirectPage = () => {
  const router = useInternalRouter();
  const { setAccessToken, setRefreshToken } = useToken();
  const { mutate: signIn } = useSignIn();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    const provider = localStorage.getItem('provider');

    if (!code || !provider) throw new Error('code 또는 provider 값이 없습니다.');

    signIn(
      {
        idToken: code,
        provider: provider as 'kakao' | 'apple',
      },
      {
        onSuccess: (response) => {
          switch (response.data.status) {
            case 'success':
              setAccessToken({
                token: response.data.accessToken,
                expiresIn: response.data.expiresIn * SECOND,
              });
              setRefreshToken({
                token: response.data.refreshToken,
                expiresIn: response.data.refreshTokenExpiresIn * SECOND,
              });
              router.replace('/');
              break;
            case 'pending':
              router.replace(`/login/register?registerToken=${response.data.registerToken}`);
              break;
          }
        },
        onError: (error) => {
          console.error(error);
        },
      },
    );
  }, [code, signIn, router, setAccessToken, setRefreshToken]);

  return <LoadingSpinner />;
};

export default LoginRedirectPage;
