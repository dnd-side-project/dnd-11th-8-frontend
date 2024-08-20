import React, { useState } from 'react';
import backButtonIcon from '@/assets/icon/guideDetailLeftArrow.svg';
import MyProfile from './MyProfile';
import Screen from '@/layouts/Screen';
import TextField from '../common/TextField';
import CTAButton from '../common/CTAButton';
import useInternalRouter from '@/hooks/useInternalRouter';

const myProfile = {
  nickname: '블루밍',
  myPlantCount: 2,
  alarmCount: 1,
  alarmStatus: true,
  alarmTime: 1,
};

const ModifyNickname: React.FC = () => {
  const initialNickname = myProfile.nickname;
  const router = useInternalRouter();

  return (
    <Screen className="px-0">
      <div className="bg-Gray50">
        <div className="flex justify-between px-[24px] pt-[31.31px]">
          <img src={backButtonIcon} alt="뒤로가기 버튼 아이콘" onClick={() => router.goBack()} />
          <p className="text-[20px] text-Gray900 font-semibold">닉네임 수정</p>
          <div className="w-[24px] h-[24px]" />
        </div>

        <MyProfile justImg={true} myProfile={myProfile} />
        <Nickname initialNickname={initialNickname} />
      </div>
    </Screen>
  );
};

interface NicknameProps {
  initialNickname: string;
}

const Nickname: React.FC<NicknameProps> = ({ initialNickname }) => {
  const [nickname, setNickname] = useState<string>('');

  const handleClear = () => {
    setNickname('');
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <p className="pt-[30px] px-[24px] pb-[6px] text-Gray800 text-[13px]">닉네임 수정</p>
        <div className="box-border flex w-[calc(100%-40px)] mx-auto items-center justify-between text-[15px] font-medium">
          <TextField
            value={nickname}
            onChange={handleNicknameChange}
            description={`특수문자를 제외한 한글, 영어만 입력해주세요.(${nickname.length}/10)`}
            className={`bg-white rounded-[10px] focus:outline-none w-full h-[54px]`}
            white={true}
            onClear={handleClear}
            placeholder={initialNickname}
          />
        </div>
      </div>

      <div className="px-[24px] pb-[10px]">
        <CTAButton text="확인" className="w-full bg-BloomingGreen500" />
      </div>
    </div>
  );
};

export default ModifyNickname;
