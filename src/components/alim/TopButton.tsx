import backButtonIcon from '@/assets/icon/guideDetailLeftArrow.svg';
import useInternalRouter from '@/hooks/useInternalRouter';

const TopButton = () => {
  const { goBack } = useInternalRouter();

  return (
    <div className="flex justify-between px-[24px] pt-[31.31px]">
      <img src={backButtonIcon} alt="뒤로가기 버튼 아이콘" onClick={() => goBack()} />
      <p className="text-[20px] text-Gray900 font-semibold	">알림</p>
      <div className="w-[24px] h-[24px]" />
    </div>
  );
};

export default TopButton;
