import Screen from '@/layouts/Screen.tsx';
import Header from '@/components/common/Header';
import RegisterFunnelTitle from '@/components/register/RegisterFunnelTitle.tsx';
import HeightBox from '@/components/common/HeightBox';
import TextField from '@/components/common/TextField';
import { useState } from 'react';
import CTAButton from '@/components/common/CTAButton';
import { isValidNickname } from '@/utils/validation/validateNickname.ts';

interface NicknameFunnelProps {
  toLocationFunnel: (nickname: string) => void;
}

const NicknameFunnel = ({ toLocationFunnel }: NicknameFunnelProps) => {
  const [nickname, setNickname] = useState('');

  const onClick = () => {
    toLocationFunnel(nickname);
  };

  let isError: boolean = false;

  // 한글 영어만 포함해야한다. 한글 초성만으로도 구성할 수 있다.
  if (!isValidNickname(nickname)) {
    isError = true;
  }

  if (nickname.length > 10) {
    isError = true;
  }

  return (
    <Screen className={'h-screen w-screen flex flex-col'}>
      <Header title={'닉네임'} className={'text-regular-body font-semibold text-Gray900'} />
      <HeightBox height={53.5} />
      <RegisterFunnelTitle title={'반가워요, 초보 식집사님!\n사용할 닉네임을 입력해주세요'} />
      <HeightBox height={40} />
      <TextField
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        description={`특수문자를 제외한 한글, 영어만 입력해주세요.(${nickname.length}/10)`}
        placeholder={'ex)루밍이'}
        isError={isError}
      />
      <HeightBox height={'100%'} />
      <CTAButton
        text={'다음'}
        className={'bg-BloomingGreen500 disabled:bg-Gray300'}
        onClick={onClick}
        disabled={nickname === '' || isError}
      />
      <HeightBox height={'30px'} />
    </Screen>
  );
};

export default NicknameFunnel;
