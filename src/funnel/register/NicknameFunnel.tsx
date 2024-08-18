import Screen from '@/layouts/Screen.tsx';
import Header from '@/components/common/Header';
import 왼쪽꺽쇠 from '@/assets/icon/왼쪽꺽쇠.tsx';
import RegisterFunnelTitle from '@/components/register/RegisterFunnelTitle.tsx';
import HeightBox from '@/components/common/HeightBox';
import TextField from '@/components/common/TextField';
import { useState } from 'react';
import CTAButton from '@/components/common/CTAButton';
import { cn } from '@/utils.ts';

interface NicknameFunnelProps {
  toLocationFunnel: (nickname: string) => void;
}

const NicknameFunnel = ({ toLocationFunnel }: NicknameFunnelProps) => {
  const [nickname, setNickname] = useState('');

  const onClick = () => {
    toLocationFunnel(nickname);
  };

  return (
    <Screen className={'h-screen w-screen flex flex-col'}>
      <Header
        title={'닉네임'}
        left={
          <button>
            <왼쪽꺽쇠 />
          </button>
        }
        className={'text-regular-body font-semibold text-Gray900'}
      />
      <HeightBox height={53.5} />
      <RegisterFunnelTitle title={'반가워요, 초보 식집사님!\n사용할 닉네임을 입력해주세요'} />
      <HeightBox height={40} />
      <TextField
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        description={`특수문자를 제외한 한글, 영어만 입력해주세요.(${nickname.length}/10)`}
        placeholder={'ex)루밍이'}
      />
      <HeightBox height={'100%'} />
      <CTAButton
        text={'다음'}
        className={cn(nickname === '' ? 'bg-Gray300' : 'bg-BloomingGreen500')}
        onClick={onClick}
        disabled={nickname === ''}
      />
      <HeightBox height={'30px'} />
    </Screen>
  );
};

export default NicknameFunnel;
