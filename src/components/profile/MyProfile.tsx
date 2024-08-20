import profileImg from '@/assets/icon/profileImg.svg';
import pencil from '@/assets/icon/pencil.svg';
import useInternalRouter from '@/hooks/useInternalRouter';
import { MyProfileProps } from '@/types/profile';

const MyProfile: React.FC<MyProfileProps> = ({ justImg, myProfile }) => {
  const { push } = useInternalRouter();

  return (
    <div className="flex flex-col pt-[28.7px] gap-[30px] items-center justify-center">
      <div className="flex flex-col gap-[15px] items-center justify-center">
        <img className="w-[72px] h-[72px]" src={profileImg} alt="프로필 이미지 사진" />
        <div className="flex gap-[5px]">
          <p className="text-Gray900 text-[22px] font-semibold">{myProfile?.nickname}님</p>
          {justImg === true ? (
            ''
          ) : (
            <img src={pencil} alt="수정하기 아이콘" onClick={() => push('/profile/edit')} />
          )}
        </div>
      </div>

      {justImg === true ? (
        ''
      ) : (
        <div className="box-border flex w-[calc(100%-40px)] mx-auto p-[20px] bg-white border border-GrayOpacity100 items-center justify-center rounded-[10px]">
          <section
            className="flex flex-col items-center justify-center gap-[4px]"
            onClick={() => push('/my-plant')}
          >
            <p className="text-Gray800 text-[13px] font-medium">내 식물</p>
            <p className="text-BloomingGreen500 text-[20px] font-semibold">
              {myProfile?.myPlantCount}
            </p>
          </section>
          <div className="w-px h-6 mx-[30px] bg-Gray400" />
          <section className="flex flex-col items-center justify-center gap-[4px]">
            <p className="text-Gray800 text-[13px] font-medium">알림</p>
            <p className="text-BloomingGreen500 text-[20px] font-semibold">
              {myProfile?.alarmCount}
            </p>
          </section>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
