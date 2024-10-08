import Screen from '@/layouts/Screen.tsx';
import LoginPlantIcon from '@/assets/icon/LoginPlantIcon.tsx';
import CTAButton from '@/components/common/CTAButton';
import HeightBox from '@/components/common/HeightBox';

interface CompleteFunnelProps {
  onSubmit: () => void;
}

const CompleteFunnel = ({ onSubmit }: CompleteFunnelProps) => {
  return (
    <Screen className={'h-screen w-screen flex flex-col'}>
      <main className={'flex-1 flex items-center justify-center flex-col'}>
        <LoginPlantIcon />
        <HeightBox height={'30px'} />
        <p className={'text-center text-Gray900 text-small-title font-semibold'}>
          블루밍 회원이 되신걸 환영해요!
          <br />
          초보 식집사로서의 활약을 기대할게요
        </p>
        <HeightBox height={'30px'} />
      </main>

      <CTAButton text={'블루밍 시작하기'} onClick={() => onSubmit()} />
      <HeightBox height={'30px'} />
    </Screen>
  );
};

export default CompleteFunnel;
