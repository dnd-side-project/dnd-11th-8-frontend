import FloatingButtonIcon from '@/assets/icon/FloatingButtonIcon.tsx';
import { MouseEventHandler } from 'react';

interface FloatingButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  rotate?: boolean;
}

const FloatingButton = ({ onClick, rotate = false }: FloatingButtonProps) => {
  return (
    <div className="absolute z-40 bottom-[27px] right-[27px]">
      <button onClick={onClick}>
        <FloatingButtonIcon rotate={rotate} />
      </button>
    </div>
  );
};

export default FloatingButton;
