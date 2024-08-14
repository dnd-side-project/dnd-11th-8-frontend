import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/centeredDrawer.tsx';
import { ReactNode } from 'react';
import { cn } from '@/utils.ts';

interface CenterBottomSheetProps {
  title: string | ReactNode;
  content: ReactNode;
  actions: ReactNode[];
  isOpen: boolean;
  onClose: () => void;
  headerAsLabel?: boolean;
  actionDirection?: 'row' | 'column';
}

const CenterBottomSheet = ({
  isOpen,
  onClose,
  title,
  content,
  actions,
  headerAsLabel,
  actionDirection = 'column',
}: CenterBottomSheetProps) => {
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerContent className={'rounded-3xl'}>
        <DrawerHeader className={'whitespace-pre-wrap'}>
          <DrawerTitle
            className={cn(
              headerAsLabel
                ? 'text-small-writing font-medium'
                : 'text-small-title font-bold leading-[29px]',
              'text-start  px-2.5 mt-[10px]',
            )}
          >
            {title}
          </DrawerTitle>
        </DrawerHeader>
        {content}
        <DrawerFooter className={cn('flex', actionDirection === 'row' ? 'flex-row' : 'flex-col')}>
          {...actions}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CenterBottomSheet;
