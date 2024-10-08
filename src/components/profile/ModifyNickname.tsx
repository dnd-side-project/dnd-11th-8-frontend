import React, { useState } from 'react';
import BackButtonIcon from '@/assets/icon/left-arrow.svg?react';
import MyProfile from './MyProfile';
import Screen from '@/layouts/Screen';
import TextField from '../common/TextField';
import CTAButton from '../common/CTAButton';
import useInternalRouter from '@/hooks/useInternalRouter';
import { useGetMyPageData } from '@/queries/useGetMyPageData.ts';
import { useUpdateNickname } from '@/queries/useUpdateNickname.ts';
import { withDefaultAsyncBoundary } from '@/utils/asyncBoundary/withDefaultAsyncBoundary';
import { isValidNickname } from '@/utils/validation/validateNickname.ts';

const ModifyNickname: React.FC = () => {
  const router = useInternalRouter();
  const { data: myProfile, error } = useGetMyPageData();

  if (!myProfile) throw Error(error?.message);

  const initialNickname = myProfile.nickname;

  return (
    <Screen className="px-0 min-h-dvh bg-Gray50 flex flex-col">
      <div className="flex justify-between px-[24px] pt-[31.31px]">
        <button onClick={() => router.goBack()}>
          <BackButtonIcon />
        </button>
        <p className="text-[20px] text-Gray900 font-semibold">닉네임 수정</p>
        <div className="w-[24px] h-[24px]" />
      </div>

      <MyProfile justImg={true} myProfile={myProfile} />
      <Nickname initialNickname={initialNickname} />
    </Screen>
  );
};

interface NicknameProps {
  initialNickname: string;
}

const Nickname: React.FC<NicknameProps> = ({ initialNickname }) => {
  const [nickname, setNickname] = useState<string>('');
  const { mutate: updateNickname } = useUpdateNickname();

  const handleClear = () => {
    setNickname('');
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);
  };

  const handleSubmit = () => {
    updateNickname(nickname);
  };

  let isError = false;

  if (!isValidNickname(nickname)) {
    isError = true;
  }

  if (nickname.length > 10) {
    isError = true;
  }

  return (
    <div className="flex flex-col justify-between flex-1">
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
            isError={isError}
          />
        </div>
      </div>

      <div className="px-[24px] pb-[10px]">
        <CTAButton type="button" onClick={handleSubmit} text="확인" disabled={isError} />
      </div>
    </div>
  );
};

export default withDefaultAsyncBoundary(ModifyNickname);
