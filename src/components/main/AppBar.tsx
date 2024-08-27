import nonUser from '@/assets/icon/nonUser.svg';
import useInternalRouter from '@/hooks/useInternalRouter.ts';

interface AppBarProps {
  logo: string;
  profileImage?: string;
}

const AppBar = ({ logo, profileImage = nonUser }: AppBarProps) => {
  const { push } = useInternalRouter();

  return (
    <div className="pt-[21.3px] flex justify-between items-center">
      <img src={logo} alt="로고" />
      <div>
        <img src={profileImage} alt="프로필이 없는 유저" onClick={() => push('/profile')} />
      </div>
    </div>
  );
};

export default AppBar;
