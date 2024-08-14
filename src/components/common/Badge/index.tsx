import { Badge, BadgeProps } from '@/components/ui/badge';
import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils.ts';

interface BadgeWrapperProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'type'> {
  text: string;
  icon?: ReactNode; // icon을 ReactNode로 유지
  type?: 'button' | 'display';
  size?: 'medium' | 'small';
}

const BadgeWrapper = ({
  text,
  type = 'display',
  size = 'medium',
  icon,
  className,
  ...buttonProps
}: BadgeWrapperProps) => {
  if (type === 'button') {
    return (
      <button {...buttonProps} type={'button'}>
        <BadgeContent text={text} icon={icon} size={size} className={className} />
      </button>
    );
  }

  return (
    <button {...buttonProps} type={'button'}>
      <BadgeContent text={text} icon={icon} size={size} className={className} />
    </button>
  );
};

interface BadgeContentProps extends BadgeProps {
  text: string;
  icon?: ReactNode; // icon을 ReactNode로 유지
  size: 'medium' | 'small';
}

const BadgeContent = ({ text, icon, className, size, ...rest }: BadgeContentProps) => {
  return (
    <Badge
      className={cn(
        'flex w-fit flex-row items-center gap-[5px] px-[10px]',
        size === 'medium' ? 'py-[6px]' : 'py-[4px]',
        className,
      )}
      {...rest}
    >
      {typeof icon === 'string' ? <img src={icon} alt="아이콘" /> : icon}
      <span
        className={cn('font-medium', size === 'medium' ? 'text-small-writing' : 'text-sub-typo')}
      >
        {text}
      </span>
    </Badge>
  );
};

export default BadgeWrapper;
