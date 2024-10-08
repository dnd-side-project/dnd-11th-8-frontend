import { Button, ButtonProps } from '@/components/ui/button.tsx';
import { cn } from '@/utils.ts';
import { ReactNode } from 'react';

interface CTAButtonProps extends Omit<ButtonProps, 'variant'> {
  text: string | ReactNode;
  icon?: string | ReactNode;
  variant?: 'primary' | 'warning' | 'ghost';
}

const CTAButtonColorVariants = {
  primary: 'bg-BloomingGreen500 text-white disabled:bg-Gray300',
  warning: 'bg-Red500 text-white disabled:bg-Gray300',
  ghost: 'bg-Gray100 text-Gray800 disabled:bg-Gray100',
};

const CTAButton = ({ text, className, icon, variant = 'primary', ...rest }: CTAButtonProps) => {
  return (
    <Button
      className={cn(
        'text-regular-body py-[18px] px-[28px] font-semibold rounded-[16px] w-full h-[54px]',
        CTAButtonColorVariants[variant],
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
