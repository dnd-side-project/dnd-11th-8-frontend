import Screen from '@/layouts/Screen.tsx';
import ReactMarkdown from 'react-markdown';
import { 개인정보처리방침 } from '@/constants/terms.ts';
import 왼쪽꺽쇠 from '@/assets/icon/왼쪽꺽쇠.tsx';
import Header from '@/components/common/Header';
import useInternalRouter from '@/hooks/useInternalRouter.ts';
import HeightBox from '@/components/common/HeightBox';

const 개인정보처리방침페이지 = () => {
  const { goBack } = useInternalRouter();

  return (
    <Screen className="pb-4">
      <Header
        title={'개인정보처리방침'}
        left={
          <button onClick={goBack}>
            <왼쪽꺽쇠 />
          </button>
        }
      />
      <HeightBox height={30} />
      <ReactMarkdown
        components={{
          h3: ({ children }) => (
            <h2 className="text-2xl pt-3 pb-1 font-bold text-Gray800">{children}</h2>
          ),
        }}
        children={개인정보처리방침}
      />
    </Screen>
  );
};

export default 개인정보처리방침페이지;
