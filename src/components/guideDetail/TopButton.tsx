import BackButtonIcon from '@/assets/icon/left-arrow.svg?react';
import useInternalRouter from '@/hooks/useInternalRouter';

const TopButton = () => {
  const { goBack } = useInternalRouter();
  return (
    <>
      <div className="flex justify-between px-[24px] mt-[31.31px] mb-[15.5px]">
        <button onClick={() => goBack()}>
          <BackButtonIcon />
        </button>
      </div>
    </>
  );
};

export default TopButton;
