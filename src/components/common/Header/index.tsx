import { ReactNode } from 'react';

interface HeaderProps {
  title: string;
  left?: ReactNode;
  right?: ReactNode;
}

const Header = ({ title, left, right }: HeaderProps) => {
  return (
    <header className={'mt-[31px] relative'}>
      <div className={'absolute left-0 top-1/2 -translate-y-1/2'}>{left}</div>
      <h1 className={'text-center text-Gray-900 text-small-title font-semibold'}>{title}</h1>
      <div className={'absolute right-0 top-1/2 -translate-y-1/2'}>{right}</div>
    </header>
  );
};

export default Header;
