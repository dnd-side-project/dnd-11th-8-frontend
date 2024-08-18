import { ReactNode } from 'react';
import { cn } from '@/utils.ts';

interface HeaderProps {
  title: string;
  left?: ReactNode;
  right?: ReactNode;
  className?: string;
}

const Header = ({ title, left, right, className }: HeaderProps) => {
  return (
    <header className={'relative h-[30px] mt-[30px]'}>
      <div className={'absolute left-0 top-1/2 -translate-y-1/2'}>{left}</div>
      <h1 className={cn('text-center text-Gray-900 text-small-title font-semibold', className)}>
        {title}
      </h1>
      <div className={'absolute right-0 top-1/2 -translate-y-1/2'}>{right}</div>
    </header>
  );
};

export default Header;
