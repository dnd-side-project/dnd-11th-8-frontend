import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const LoginRedirectPage = () => {
  // TODO: 카카오 로그인 code 서치 파라미터 확인 후 처리
  // TODO: 애플 로그인 로컬
  const [searchParams] = useSearchParams();
  const kakaoCode = searchParams.get('code');

  useEffect(() => {
    const appleCode = localStorage.getItem('appleCode');
    if (kakaoCode) {
      console.log('kakaoCode', kakaoCode);
    } else if (appleCode) {
      console.log('appleCode', appleCode);
    } else {
      console.log('code 없음');
    }
  }, [kakaoCode]);
  return <div>로그인 진행중...</div>;
};

export default LoginRedirectPage;
