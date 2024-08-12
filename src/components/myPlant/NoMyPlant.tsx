import noMyPlant from '@/assets/icon/noMyPlant.svg';

const NoMyPlant = () => {
  return (
    <div className="flex items-center justify-center mt-[102.61px]">
      <div className="flex flex-col gap-[25px] p-4 ">
        <div className="flex justify-center">
          <img src={noMyPlant} alt="식물이 없어요 이미지" />
        </div>
        <div className="flex flex-col gap-[10px] text-center text-[15px] font-medium">
          <div>
            <p className="text-Gray800 text-[22px] font-semibold">등록된 식물이 없어요</p>
          </div>
          <div className="text-Gray500">
            <p>
              아래의 <span className="text-Gray800">+버튼</span>을 이용하여
            </p>
            <p>식물과 위치를 추가/변경 할 수 있어요</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoMyPlant;
