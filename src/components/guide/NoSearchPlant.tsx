import noMyPlant from '@/assets/icon/noMyPlant.svg';

const NoSearchPlant = () => {
  return (
    <div className="flex items-center justify-center mt-[102.61px]">
      <div className="flex flex-col gap-[25px] p-4 ">
        <div className="flex justify-center">
          <img src={noMyPlant} alt="식물이 없어요 이미지" />
        </div>
        <div className="flex flex-col gap-[10px] text-center text-[15px] font-medium">
          <div>
            <p className="text-Gray800 text-[26px] font-semibold">앗 ..</p>
          </div>
          <div className="text-Gray500">
            <p>검색결과가 없어요</p>
            <p>곧 다양한 식물이 추가될 예정이예요</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoSearchPlant;
