import nonUser from '@/assets/icon/nonUser.svg';

const MyPlant = () => {
  return (
    <div className="bg-[#F2F1E5]">
      <div className="px-[22px]">
        <div className="pt-[66.5px] flex justify-between">
          <div className="font-bold">Blooming</div>
          <div>
            <img src={nonUser} alt="프로필이 없는 유저" />
          </div>
        </div>

        <div className="text-small-title text-Gray900 pt-[36.1px] pb-[30.3px]">
          <p>김루밍님</p>
          <p>블루밍에 오신걸 환영해요</p>
        </div>
      </div>
    </div>
  );
};

export default MyPlant;
