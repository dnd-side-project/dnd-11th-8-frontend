import KakaoIcon from '@/assets/icon/KakaoIcon.tsx';

const KakaoLogin = () => {
  const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <button
      className={
        'flex flex-row items-center justify-center w-full gap-2.5 bg-KakaoBackground rounded-[12px] py-[14px] -mt-[2px]'
      }
      onClick={handleLogin}
    >
      <KakaoIcon />
      <span className={'text-regular-body font-semibold'}>카카오 로그인</span>
    </button>
  );
};

export default KakaoLogin;
