import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSignIn } from '@/queries/useSignIn.ts';
import useInternalRouter from '@/hooks/useInternalRouter.ts';
import { useCookies } from 'react-cookie';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';

const LoginRedirectPage = () => {
  const router = useInternalRouter();
  const [, setCookie] = useCookies(['access-token', 'refresh-token']);
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
              setCookie('access-token', response.data.accessToken, {
                expires: new Date(response.data.expiresIn),
              });
              setCookie('refresh-token', response.data.refreshToken, {
                expires: new Date(response.data.refreshTokenExpiresIn),
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
  }, [code, signIn, router, setCookie]);

  return <LoadingSpinner />;
};

export default LoginRedirectPage;
