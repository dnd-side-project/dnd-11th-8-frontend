import KakaoLogin from '@/components/auth/KakaoLogin.tsx';
import AppleLogin from '@/components/auth/AppleLogin.tsx';
import Screen from '@/layouts/Screen.tsx';
import LoginTitle from '@/components/login/LoginTitle.tsx';
import LoginLogo from '@/assets/icon/login-logo.svg?react';
import HeightBox from '@/components/common/HeightBox';
import LoginPlantIcon from '@/assets/icon/LoginPlantIcon.tsx';
import LoginTerms from '@/components/login/LoginTerms.tsx';

const LoginPage = () => {
  return (
    <Screen className={'bg-LoginBackground h-screen flex flex-col items-center justify-center'}>
      <LoginTitle />
      <HeightBox height={15} />
      <LoginLogo />
      <HeightBox height={40} />
      <LoginPlantIcon />
      <KakaoLogin />
      <HeightBox height={8} />
      <AppleLogin />
      <HeightBox height={24} />
      <LoginTerms />
    </Screen>
  );
};

export default LoginPage;
