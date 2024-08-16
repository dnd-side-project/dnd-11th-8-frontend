import { cn } from '@/utils.ts';

interface HeightBoxProps {
  height: number;
}

const HeightBox = ({ height }: HeightBoxProps) => {
  return <div className={cn('w-full', `mt-[${height}px]`)} />;
};

export default HeightBox;
