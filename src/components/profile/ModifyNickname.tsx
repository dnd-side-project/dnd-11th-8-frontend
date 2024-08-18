import React, { useState, useEffect } from 'react';
import backButtonIcon from '@/assets/icon/guideDetailLeftArrow.svg';
import MyProfile from './MyProfile';

const myProfile = {
  nickname: '블루밍',
  myPlantCount: 2,
  alarmCount: 1,
  alarmStatus: true,
  alarmTime: 1,
};

const ModifyNickname: React.FC = () => {
  const initialNickname = myProfile.nickname;

  return (
    <div className="w-screen h-screen bg-Gray50">
      <div className="flex justify-between px-[24px] pt-[31.31px]">
        <img src={backButtonIcon} alt="뒤로가기 버튼 아이콘" />
        <p className="text-[20px] text-Gray900 font-semibold">닉네임 수정</p>
        <div className="w-[24px] h-[24px]" />
      </div>

      <MyProfile justImg={true} myProfile={myProfile} />
      <Nickname initialNickname={initialNickname} />
    </div>
  );
};

interface NicknameProps {
  initialNickname: string;
}

const Nickname: React.FC<NicknameProps> = ({ initialNickname }) => {
  const [nickname, setNickname] = useState<string>('');
  const [isDefault, setIsDefault] = useState<boolean>(true);

  useEffect(() => {
    setNickname(initialNickname);
  }, [initialNickname]);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);
    setIsDefault(value === '');
  };

  return (
    <>
      <p className="pt-[30px] px-[24px] mb-[6px] text-Gray800 text-[13px] ">닉네임 수정</p>
      <div className="box-border flex w-[calc(100%-40px)] mx-auto items-center justify-between text-[15px] font-medium">
        <input
          type="text"
          value={nickname}
          onChange={handleNicknameChange}
          className={`px-[16px] py-[14px] w-full bg-white border border-GrayOpacity100  rounded-[10px] focus:outline-none ${isDefault ? 'text-Gray400' : 'text-Gray900'}`}
        />
      </div>
    </>
  );
};

export default ModifyNickname;
