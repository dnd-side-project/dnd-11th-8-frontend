import { cn } from '@/utils.ts';

interface SeparatorProps {
  height: number;
  verticalSpace?: number;
}

const Separator = ({ height, verticalSpace = 32 }: SeparatorProps) => {
  return (
    <div
      style={{
        height: height,
        marginTop: verticalSpace / 2,
        marginBottom: verticalSpace / 2,
      }}
      className={cn(`w-screen max-w-md bg-Gray100 -ml-6`)}
    />
  );
};

export default Separator;
