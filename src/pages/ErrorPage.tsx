import ErrorIcon from '@/assets/icon/error.svg?react';
import CTAButton from '@/components/common/CTAButton';
import TabBar from '@/components/main/TabBar';
import Screen from '@/layouts/Screen';
import { useEffect } from 'react';

// TODO: 다시 시도 버튼 기능 구현하기

interface ErrorPageProps {
  reset?: () => void;
  error?: Error;
}

const ErrorPage = ({ reset, error }: ErrorPageProps) => {
  useEffect(() => {
    if (import.meta.env.MODE === 'development') {
      console.error(error);
    }
  }, []);

  return (
    <Screen className="flex items-center justify-center h-screen p-0">
      <div className="flex flex-col gap-[25px] p-4 ">
        <div className="flex justify-center">
          <ErrorIcon />
        </div>
        <div className="flex flex-col gap-[10px] text-center text-[15px] font-medium">
          <div>
            <p className="text-Gray800 text-[26px] font-semibold">
              {error === undefined ? '페이지를 찾을 수 없습니다.' : '에러가 발생했습니다.'}
            </p>
          </div>
          {error === undefined ? (
            <div className="text-Gray500 text-[15px] pb-[10px]">
              <p>잘못된 경로로 접근하셨거나, </p>
              <p>사용할 수 없는 웹사이트 주소입니다.</p>
              <p>이용에 불편을 드려 죄송합니다.</p>
            </div>
          ) : (
            <div className="text-Gray500 text-[15px] pb-[10px]">{error.message}</div>
          )}
          <div>
            <CTAButton onClick={reset} text="다시 시도" className="bg-BloomingGreen500 w-[120px]" />
          </div>
        </div>
      </div>
      <TabBar />
    </Screen>
  );
};

export default ErrorPage;
