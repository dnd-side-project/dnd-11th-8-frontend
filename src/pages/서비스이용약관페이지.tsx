import { 서비스이용약관 } from '@/constants/terms';
import Screen from '@/layouts/Screen.tsx';
import ReactMarkdown from 'react-markdown';
import Header from '@/components/common/Header';
import 왼쪽꺽쇠 from '@/assets/icon/left-arrow.svg?react';
import useInternalRouter from '@/hooks/useInternalRouter.ts';
import HeightBox from '@/components/common/HeightBox';

const 서비스이용약관페이지 = () => {
  const { goBack } = useInternalRouter();
  return (
    <Screen className="pb-4">
      <Header
        title={'서비스 이용약관'}
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
        children={서비스이용약관}
      />
    </Screen>
  );
};

export default 서비스이용약관페이지;
