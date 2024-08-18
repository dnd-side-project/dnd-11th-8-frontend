import { MouseEvent } from 'react';
import AppleLogo from '@/assets/icon/AppleLogo.tsx';

const AppleLogin = () => {
  const handleAppleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.AppleID.auth.init({
      clientId: 'com.service.blooming',
      scope: 'name email',
      redirectURI: import.meta.env.VITE_REDIRECT_URI,
      usePopup: true,
    });
    try {
      const data = await window.AppleID.auth.signIn();
      console.log('apple login result data: ', data);
      localStorage.setItem('appleId', data.authorization.id_token);
    } catch (e) {
      console.error(e);
      // TODO: 다이얼로그를 띄우거나 별도의 에러 처리 시도하기
    }
  };

  return (
    <button
      className={
        'flex flex-row items-center justify-center w-full py-[14px] rounded-[12px] bg-black gap-2.5'
      }
      onClick={handleAppleLogin}
    >
      <AppleLogo />
      <span className={'text-white text-regular-body font-semibold'}>Apple로 로그인</span>
    </button>
  );
};

export default AppleLogin;
