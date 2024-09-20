import { cn } from '@/utils.ts';

interface SeparatorProps {
  height: number;
  bottomMargin?: number;
  topMargin?: number;
}

const Separator = ({ height, bottomMargin = 16, topMargin = 16 }: SeparatorProps) => {
  return (
    <div
      style={{
        height: height,
        marginTop: topMargin,
        marginBottom: bottomMargin,
      }}
      className={cn(`w-screen max-w-md bg-Gray100 -ml-6`)}
    />
  );
};

export default Separator;
