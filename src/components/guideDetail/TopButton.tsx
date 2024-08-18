import backButtonIcon from '@/assets/icon/guideDetailLeftArrow.svg';
import useInternalRouter from '@/hooks/useInternalRouter';

const TopButton = () => {
  const { goBack } = useInternalRouter();
  return (
    <>
      <div className="flex justify-between px-[24px] mt-[31.31px] mb-[15.5px]">
        <img src={backButtonIcon} alt="뒤로가기 버튼 아이콘" onClick={() => goBack()} />
      </div>
    </>
  );
};

export default TopButton;
