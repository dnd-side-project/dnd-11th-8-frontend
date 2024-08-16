import { cn } from '@/utils.ts';

interface SeparatorProps {
  height: number;
  verticalSpace?: number;
}

const Separator = ({ height, verticalSpace = 32 }: SeparatorProps) => {
  return (
    <div className={cn(`h-[${height}px]`, `w-screen my-[${verticalSpace}px] bg-Gray100 -ml-6`)} />
  );
};

export default Separator;
