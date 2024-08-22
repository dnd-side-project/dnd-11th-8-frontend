import { Button, ButtonProps } from '@/components/ui/button.tsx';
import { cn } from '@/utils.ts';
import { ReactNode } from 'react';

interface CTAButtonProps extends ButtonProps {
  color?: keyof typeof CTAButtonColor;
  text: string | ReactNode;
  icon?: string | ReactNode;
}

const CTAButtonColor = {
  disabled: 'bg-gray-400',
  normal: 'bg-gray-700',
  active: 'bg-gray-800',
};

const CTAButton = ({ text, color = 'normal', className, icon, ...rest }: CTAButtonProps) => {
  return (
    <Button
      className={cn(
        'text-regular-body py-[18px] px-[28px] text-white font-semibold rounded-[16px] w-full h-[54px]',
        CTAButtonColor[color],
        className,
      )}
      {...rest}
    >
      {typeof icon === 'string' ? <img src={icon} alt="icon" /> : icon}
      {text}
    </Button>
  );
};

export default CTAButton;
