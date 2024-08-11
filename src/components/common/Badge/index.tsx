import { Badge, BadgeProps } from '@/components/ui/badge';
import { HTMLAttributes, ReactNode } from 'react';
import { FiPlus } from 'react-icons/fi';
import { cn } from '@/utils.ts';

interface BadeWrapperProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'type'> {
  text: string;
  type?: 'button' | 'display';
  size?: 'medium' | 'small';
}

const BadgeWrapper = ({
  text,
  type = 'display',
  size = 'medium',
  className,
  ...buttonProps
}: BadeWrapperProps) => {
  if (type === 'button') {
    return (
      <button {...buttonProps} type={'button'}>
        <BadgeContent text={text} icon={<FiPlus size={14} />} size={size} className={className} />
      </button>
    );
  }

  return (
    <button {...buttonProps} type={'button'}>
      <BadgeContent text={text} size={size} className={className} />
    </button>
  );
};

interface BadgeContentProps extends BadgeProps {
  text: string;
  icon?: ReactNode;
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
      {icon}
      <span
        className={cn('font-medium', size === 'medium' ? 'text-small-writing' : 'text-sub-typo')}
      >
        {text}
      </span>
    </Badge>
  );
};

export default BadgeWrapper;
