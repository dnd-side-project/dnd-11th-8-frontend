import { Button, ButtonProps } from '@/components/ui/button.tsx';
import { cn } from '@/utils.ts';

interface CTAButtonProps extends ButtonProps {
  color?: keyof typeof CTAButtonColor;
  text: string;
}

const CTAButtonColor = {
  disabled: 'bg-gray-400',
  normal: 'bg-gray-700',
  active: 'bg-gray-800',
};

const CTAButton = ({ text, color = 'normal', className, ...rest }: CTAButtonProps) => {
  return (
    <Button
      className={cn(
        'text-regular-body py-[18px] px-[28px] text-white font-semibold rounded-[16px] w-full h-[54px]',
        CTAButtonColor[color],
        className,
      )}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default CTAButton;
