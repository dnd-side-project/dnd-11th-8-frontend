import { MouseEvent, useEffect } from 'react';

const AppleLogin = () => {
  useEffect(() => {
    window.AppleID.auth.init({
      clientId: 'com.service.blooming',
      scope: 'name email',
      redirectURI: 'https://blooming.com/redirect',
    });
  }, []);

  const handleAppleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const data = await window.AppleID.auth.signIn();
      console.log('data: ', data);
    } catch (e) {
      console.error(e);
      // TODO: 다이얼로그를 띄우거나 별도의 에러 처리 시도하기
    }
  };

  return <button onClick={handleAppleLogin}>애플 로그인</button>;
};

export default AppleLogin;
