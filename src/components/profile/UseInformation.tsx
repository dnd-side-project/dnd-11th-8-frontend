import React from 'react';
import moving from '@/assets/icon/moving.svg';
import logout from '@/assets/icon/logout.svg';

interface InformationItemProps {
  title: string;
  icon: string;
  altText: string;
  onClick: () => void;
}

const InformationItem: React.FC<InformationItemProps> = ({ title, icon, altText, onClick }) => {
  return (
    <div
      className="box-border flex w-[calc(100%-40px)] mx-auto px-[24px] py-[16px] bg-white border border-GrayOpacity100 items-center justify-between rounded-[10px] cursor-pointer"
      onClick={onClick}
    >
      <p className="text-Gray800 text-[15px] font-medium">{title}</p>
      <img src={icon} alt={altText} />
    </div>
  );
};

const UseInformation: React.FC = () => {
  const handlePrivacyPolicyClick = () => {
    alert('개인정보처리방침 클릭됨');
  };

  const handleTermsClick = () => {
    alert('이용약관 클릭됨');
  };

  const handleAlimClick = () => {
    alert('알림 클릭됨');
  };

  const handleLogoutClick = () => {
    alert('로그아웃 클릭됨');
  };

  const handleWithdrawalClick = () => {
    alert('탈퇴하기 클릭됨');
  };

  const items: InformationItemProps[] = [
    {
      title: '개인정보처리방침',
      icon: moving,
      altText: '개인정보 처리 방침으로 가는 아이콘 버튼',
      onClick: handlePrivacyPolicyClick,
    },
    {
      title: '이용약관',
      icon: moving,
      altText: '개인정보 처리 방침으로 가는 아이콘 버튼',
      onClick: handleTermsClick,
    },
    {
      title: '알림',
      icon: moving,
      altText: '알림으로 가는 아이콘 버튼',
      onClick: handleAlimClick,
    },
    { title: '로그아웃', icon: logout, altText: '로그아웃 버튼', onClick: handleLogoutClick },
    { title: '탈퇴하기', icon: moving, altText: '탈퇴하기 버튼', onClick: handleWithdrawalClick },
  ];

  return (
    <div>
      <section>
        <p className="px-[20px] text-Gray800 text-[17px] font-semibold my-[25px]">이용 안내</p>
      </section>
      <section className="flex flex-col gap-[10px]">
        {items.map((item, index) => (
          <InformationItem
            key={index}
            title={item.title}
            icon={item.icon}
            altText={item.altText}
            onClick={item.onClick}
          />
        ))}
        <div className="mb-[37px]"></div>
      </section>
    </div>
  );
};

export default UseInformation;
