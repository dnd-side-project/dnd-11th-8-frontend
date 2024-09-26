import Logo from '@/assets/icon/logo.svg?react';
import Xbtn from '@/assets/icon/x-gray.svg?react';
import useInternalRouter from '@/hooks/useInternalRouter';

const TopButton = () => {
  const router = useInternalRouter();
  return (
    <div className="flex justify-between px-[22px] pt-[18.31px]">
      <button onClick={() => router.push('/')}>
        <Logo />
      </button>
      <button onClick={() => router.goBack()}>
        <Xbtn />
      </button>
    </div>
  );
};

export default TopButton;
