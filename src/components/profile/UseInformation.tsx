import React, { useState } from 'react';
import moving from '@/assets/icon/moving.svg';
import logoutIcon from '@/assets/icon/logout.svg';
import CenterBottomSheet from '../common/CenterBottomSheet';
import CTAButton from '../common/CTAButton';
import useInternalRouter from '@/hooks/useInternalRouter';
import { useLogout } from '@/queries/useLogout.ts';
import { useDeleteUser } from '@/queries/useDeleteUser.ts';
import { useCookies } from 'react-cookie';

interface InformationItemProps {
  title: string;
  icon: string;
  altText: string;
  onClick: () => void;
}

// 정보 항목 컴포넌트
const InformationItem: React.FC<InformationItemProps> = ({ title, icon, altText, onClick }) => (
  <div
    className="box-border flex w-[calc(100%-40px)] mx-auto px-[24px] py-[16px] bg-white border border-GrayOpacity100 items-center justify-between rounded-[10px] cursor-pointer"
    onClick={onClick}
  >
    <p className="text-Gray800 text-[15px] font-medium">{title}</p>
    <img src={icon} alt={altText} />
  </div>
);

const UseInformation: React.FC = () => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(false);
  const { push } = useInternalRouter();
  const { mutate: logout } = useLogout();
  const { mutate: deleteUser } = useDeleteUser();
  const [, , removeCookie] = useCookies(['access-token', 'refresh-token']);

  const handlePrivacyPolicyClick = () => {
    push('/terms/privacy');
  };

  const handleTermsClick = () => {
    push('/terms/service');
  };

  const handleAlimClick = () => {
    push('/profile/notification');
  };

  const deleteUserHandler = () => {
    setIsOpenDeleteModal(false);
    deleteUser(undefined, {
      onSuccess: () => {
        removeCookie('access-token');
        removeCookie('refresh-token');
        localStorage.removeItem('device-token');
      },
    });
  };

  const logoutHandler = () => {
    setIsOpenLogoutModal(false);
    logout(undefined, {
      onSuccess: () => {
        removeCookie('access-token');
        removeCookie('refresh-token');
        localStorage.removeItem('device-token');
      },
    });
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
      altText: '이용약관으로 가는 아이콘 버튼',
      onClick: handleTermsClick,
    },
    {
      title: '알림',
      icon: moving,
      altText: '알림으로 가는 아이콘 버튼',
      onClick: handleAlimClick,
    },
    {
      title: '로그아웃',
      icon: logoutIcon,
      altText: '로그아웃 버튼',
      onClick: () => setIsOpenLogoutModal(true),
    },
    {
      title: '탈퇴하기',
      icon: moving,
      altText: '탈퇴하기 버튼',
      onClick: () => setIsOpenDeleteModal(true),
    },
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

      {/* 탈퇴하기 모달 */}
      <CenterBottomSheet
        title={'정말 떠나시나요?\n탈퇴시 모든 데이터가 사라집니다.'}
        content={<></>}
        actionDirection={'row'}
        actions={[
          <CTAButton
            text={'취소'}
            type={'button'}
            onClick={() => setIsOpenDeleteModal(false)}
            className={'bg-Gray100 text-Gray800'}
          />,
          <CTAButton
            text={'탈퇴하기'}
            type={'button'}
            onClick={deleteUserHandler}
            className={'bg-Red500'}
          />,
        ]}
        isOpen={isOpenDeleteModal}
        onOpenChange={setIsOpenDeleteModal}
      />

      {/* 로그아웃 모달 */}
      <CenterBottomSheet
        title={'로그아웃 하시겠어요?'}
        content={<></>}
        actionDirection={'row'}
        actions={[
          <CTAButton
            text={'취소'}
            type={'button'}
            onClick={() => setIsOpenLogoutModal(false)}
            className={'bg-Gray100 text-Gray800'}
          />,
          <CTAButton
            text={'로그아웃'}
            type={'button'}
            onClick={logoutHandler}
            className={'bg-BloomingGreen500'}
          />,
        ]}
        isOpen={isOpenLogoutModal}
        onOpenChange={setIsOpenLogoutModal}
      />
    </div>
  );
};

export default UseInformation;
