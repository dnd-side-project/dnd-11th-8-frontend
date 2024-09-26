import NonUser from '@/assets/icon/profile-dark-gray.svg?react';
import useInternalRouter from '@/hooks/useInternalRouter.ts';
import { ReactNode } from 'react';

interface AppBarProps {
  logo: ReactNode;
}

const AppBar = ({ logo }: AppBarProps) => {
  const { push } = useInternalRouter();

  return (
    <div className="pt-[21.3px] flex justify-between items-center">
      {logo}
      <div>
        <button onClick={() => push('/profile')}>
          <NonUser />
        </button>
      </div>
    </div>
  );
};

export default AppBar;
