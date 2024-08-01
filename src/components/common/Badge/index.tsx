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
  ...buttonProps
}: BadeWrapperProps) => {
  if (type === 'button') {
    return (
      <button {...buttonProps}>
        <BadgeContent
          text={text}
          icon={<FiPlus size={14} />}
          size={size}
          className={'bg-gray-50 text-gray-800'}
        />
      </button>
    );
  }

  return (
    <button {...buttonProps}>
      <BadgeContent text={text} size={size} className={'bg-gray-500 text-white'} />
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
        'flex w-fit flex-row items-center gap-1 px-2',
        size === 'medium' ? 'py-1' : 'py-0.5',
        className,
      )}
      {...rest}
    >
      {icon}
      <span className={cn(size === 'medium' ? 'text-small-writing' : 'text-sub-typo')}>{text}</span>
    </Badge>
  );
};

export default BadgeWrapper;
