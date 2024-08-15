import backButtonIcon from '@/assets/icon/guideDetailLeftArrow.svg';

const TopButton = () => {
  return (
    <div className="flex justify-between px-[24px] mt-[31.31px]">
      <img src={backButtonIcon} alt="뒤로가기 버튼 아이콘" />
      <p className="text-[20px] text-Gray900 font-semibold	">가이드</p>
      <div className="w-[24px] h-[24px]" />
    </div>
  );
};

export default TopButton;
