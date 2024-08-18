import logo from '@/assets/icon/logo.svg';
import xbtn from '@/assets/icon/xbtn.svg';

const TopButton = () => {
  return (
    <div className="flex justify-between px-[22px] pt-[18.31px]">
      <img src={logo} alt="블루밍 로고" />
      <img src={xbtn} alt="닫기 아이콘" />
    </div>
  );
};

export default TopButton;
