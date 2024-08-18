import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSignIn } from '@/queries/useSignIn.ts';
import { LuLoader2 } from 'react-icons/lu';
import useInternalRouter from '@/hooks/useInternalRouter.ts';
import { useCookies } from 'react-cookie';
import { ONE_DAY } from '@/constants/day.ts';

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
                expires: new Date(Date.now() + ONE_DAY * 7),
              });
              setCookie('refresh-token', response.data.refreshToken, {
                expires: new Date(Date.now() + ONE_DAY * 180),
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

  return (
    <div
      className={
        'w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-LoginBackground'
      }
    >
      <LuLoader2 className={'animate-spin'} />
    </div>
  );
};

export default LoginRedirectPage;
