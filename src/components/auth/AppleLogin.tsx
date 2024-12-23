import { MouseEvent } from 'react';
import AppleLogo from '@/assets/icon/brand/apple.svg?react';
import useInternalRouter from '@/hooks/useInternalRouter.ts';

const AppleLogin = () => {
  const router = useInternalRouter();
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
      localStorage.setItem('provider', 'apple');
      router.push(`/redirect?code=${data.authorization.id_token}`);
    } catch (e) {
      console.error(e);
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
