import { useSearchParams } from 'react-router-dom';
import NicknameFunnel from '@/funnel/register/NicknameFunnel.tsx';
import LocationFunnel from '@/funnel/register/LocationFunnel.tsx';
import NotificationTimeFunnel from '@/funnel/register/NotificationTimeFunnel.tsx';
import { useState } from 'react';
import { NumericRange } from '@/types/NewmericRange.ts';
import CompleteFunnel from '@/funnel/register/CompleteFunnel.tsx';

type RegisterForm = {
  nickname: string;
  location: string;
  locationId: number | undefined;
  notificationTime: NumericRange<0, 17>;
};

const RegisterPage = () => {
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    nickname: '',
    location: '',
    locationId: undefined,
    notificationTime: 0,
  });

  const [step, setStep] = useState<'닉네임입력' | '주소입력' | '알림시간대입력' | '완료하기'>(
    '닉네임입력',
  );

  const [searchParams] = useSearchParams();
  const registerToken = searchParams.get('registerToken');

  if (!registerToken) throw new Error('잘못된 접근입니다.');

  switch (step) {
    case '닉네임입력':
      return (
        <NicknameFunnel
          toLocationFunnel={(nickname) => {
            setRegisterForm({
              ...registerForm,
              nickname,
            });
            setStep('주소입력');
          }}
        />
      );
    case '주소입력':
      return (
        <LocationFunnel
          toNotificationTimeFunnel={(location) => {
            setRegisterForm({
              ...registerForm,
              location: location.name,
              locationId: location.locationId,
            });
            setStep('알림시간대입력');
          }}
        />
      );
    case '알림시간대입력':
      return (
        <NotificationTimeFunnel
          toCompleteFunnel={(time) => {
            setRegisterForm({
              ...registerForm,
              notificationTime: time,
            });
            setStep('완료하기');
          }}
        />
      );
    case '완료하기':
      return <CompleteFunnel />;
    default:
      throw Error('잘못된 접근입니다.');
  }
};

export default RegisterPage;
