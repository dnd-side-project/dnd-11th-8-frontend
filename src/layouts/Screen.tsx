import { PropsWithChildren } from 'react';
import { cn } from '@/utils.ts';

const Screen = ({ children, className }: PropsWithChildren & { className: string }) => {
  return <div className={cn('max-w-md w-full mx-auto px-[24px]', className)}>{children}</div>;
};

export default Screen;
