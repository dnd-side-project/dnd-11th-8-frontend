import { useSearchParams } from 'react-router-dom';

const RegisterPage = () => {
  const [searchParams] = useSearchParams();
  const registerToken = searchParams.get('registerToken');

  if (!registerToken) throw new Error('잘못된 접근입니다.');

  return <h1>Register Page: {registerToken}</h1>;
};

export default RegisterPage;
