import { useSearchParams } from 'react-router-dom';
import NicknameFunnel from '@/funnel/register/NicknameFunnel.tsx';
import LocationFunnel from '@/funnel/register/LocationFunnel.tsx';
import NotificationTimeFunnel from '@/funnel/register/NotificationTimeFunnel.tsx';
import { useState } from 'react';
import { NumericRange } from '@/types/NewmericRange.ts';
import CompleteFunnel from '@/funnel/register/CompleteFunnel.tsx';
import { useRegisterUser } from '@/queries/useRegisterUser.ts';
import useInternalRouter from '@/hooks/useInternalRouter.ts';
import { useCookies } from 'react-cookie';
import useToast from '@/hooks/useToast.tsx';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';

type RegisterForm = {
  nickname: string;
  location: string;
  locationId: number | undefined;
};

const RegisterPage = () => {
  const [, setCookie] = useCookies(['access-token', 'refresh-token']);
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    nickname: '',
    location: '',
    locationId: undefined,
  });
  const { openToast } = useToast();

  const [step, setStep] = useState<
    '닉네임입력' | '주소입력' | '알림시간대입력' | '완료하기' | '로딩'
  >('닉네임입력');

  const [searchParams] = useSearchParams();
  const router = useInternalRouter();
  const registerToken = searchParams.get('registerToken');

  const { mutate: registerUser } = useRegisterUser();

  if (!registerToken) throw new Error('잘못된 접근입니다.');

  const onSubmit = (time: NumericRange<1, 19>) => {
    const data = {
      nickname: registerForm.nickname,
      regionId: registerForm.locationId!,
      alarmTime: time,
    };
    setStep('로딩');
    registerUser(
      { ...data, registerToken },
      {
        onSuccess: (response) => {
          const currentDate = new Date();
          setStep('완료하기');
          setCookie('access-token', response.data.accessToken, {
            expires: new Date(currentDate.getTime() + response.data.expiresIn),
          });
          setCookie('refresh-token', response.data.refreshToken, {
            expires: new Date(currentDate.getTime() + response.data.refreshTokenExpiresIn),
          });
        },
        onError: () => {
          setStep('알림시간대입력');
          openToast({
            message: (
              <p className="flex flex-row items-center justify-center w-full gap-2 text-small-body font-medium text-white">
                회원가입에 실패했습니다. 다시 시도해주세요.
              </p>
            ),
          });
        },
      },
    );
  };

  switch (step) {
    case '닉네임입력':
      return (
        <NicknameFunnel
          toLocationFunnel={(nickname) => {
            setRegisterForm((prev) => ({
              ...prev,
              nickname,
            }));
            setStep('주소입력');
          }}
        />
      );
    case '주소입력':
      return (
        <LocationFunnel
          goBack={() => setStep('닉네임입력')}
          toNotificationTimeFunnel={(location) => {
            setRegisterForm((prev) => ({
              ...prev,
              location: location.name,
              locationId: location.id,
            }));
            setStep('알림시간대입력');
          }}
        />
      );
    case '알림시간대입력':
      return (
        <NotificationTimeFunnel goBack={() => setStep('주소입력')} toCompleteFunnel={onSubmit} />
      );
    case '완료하기':
      return <CompleteFunnel onSubmit={() => router.replace('/')} />;
    case '로딩':
      return <LoadingSpinner />;
    default:
      throw Error('잘못된 접근입니다.');
  }
};

export default RegisterPage;
