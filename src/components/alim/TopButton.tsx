import BackButtonIcon from '@/assets/icon/left-arrow.svg?react';
import useInternalRouter from '@/hooks/useInternalRouter';

const TopButton = () => {
  const { goBack } = useInternalRouter();

  return (
    <div className="flex justify-between px-[24px] pt-[31.31px]">
      <button onClick={() => goBack()}>
        <BackButtonIcon />
      </button>
      <p className="text-[20px] text-Gray900 font-semibold	">알림</p>
      <div className="w-[24px] h-[24px]" />
    </div>
  );
};

export default TopButton;
