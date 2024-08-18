import logo from '@/assets/icon/logo.svg';
import xbtn from '@/assets/icon/xbtn.svg';
import useInternalRouter from '@/hooks/useInternalRouter';

const TopButton = () => {
  const router = useInternalRouter();
  return (
    <div className="flex justify-between px-[22px] pt-[18.31px]">
      <img src={logo} alt="블루밍 로고" onClick={() => router.push('/')} />
      <img src={xbtn} alt="닫기 아이콘" onClick={() => router.goBack()} />
    </div>
  );
};

export default TopButton;
