import { PropsWithChildren } from 'react';

const Screen = ({ children }: PropsWithChildren) => {
  return <div className={'max-w-md w-full mx-auto px-[24px]'}>{children}</div>;
};

export default Screen;
