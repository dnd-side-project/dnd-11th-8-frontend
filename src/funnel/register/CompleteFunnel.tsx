import 왼쪽꺽쇠 from '@/assets/icon/왼쪽꺽쇠';
import Header from '@/components/common/Header';
import Screen from '@/layouts/Screen.tsx';
import LoginPlantIcon from '@/assets/icon/LoginPlantIcon.tsx';
import CTAButton from '@/components/common/CTAButton';
import HeightBox from '@/components/common/HeightBox';

const CompleteFunnel = () => {
  return (
    <Screen className={'h-screen w-screen flex flex-col'}>
      <Header
        title={''}
        left={
          <button>
            <왼쪽꺽쇠 />
          </button>
        }
      />
      <main className={'flex-1 flex items-center justify-center flex-col'}>
        <LoginPlantIcon />
        <HeightBox height={'30px'} />
        <p className={'text-center text-Gray900 text-small-title font-semibold'}>
          블루밍 회원이 되신걸 환영해요!
          <br />
          초보 식집사로서의 활약을 기대할게요
        </p>
        <HeightBox height={'100px'} />
      </main>

      <CTAButton text={'블루밍 시작하기'} className={'bg-BloomingGreen500'} />
      <HeightBox height={'30px'} />
    </Screen>
  );
};

export default CompleteFunnel;
