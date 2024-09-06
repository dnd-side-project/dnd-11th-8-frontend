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
    <header className={'grid grid-cols-3 pt-[30px]'}>
      <div className={'w-full flex flex-row justify-start items-center'}>{left}</div>
      <h1
        className={cn('w-full text-center text-Gray-900 text-small-title font-semibold', className)}
      >
        {title}
      </h1>
      <div className={'w-full flex flex-row justify-end items-center'}>{right}</div>
    </header>
  );
};

export default Header;
