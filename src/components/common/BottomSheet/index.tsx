import { ReactNode } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer.tsx';
import { cn } from '@/utils.ts';

interface BottomSheetProps {
  title: string;
  content: ReactNode;
  actions: ReactNode[];
  isOpen: boolean;
  onClose: () => void;
  headerAsLabel?: boolean;
}

const BottomSheet = ({
  isOpen,
  onClose,
  title,
  content,
  actions,
  headerAsLabel,
}: BottomSheetProps) => {
  return (
    <Drawer
      disablePreventScroll={true}
      preventScrollRestoration={true}
      modal={true}
      open={isOpen}
      onClose={onClose}
    >
      <DrawerContent className={'md:max-w-md md:mx-auto'}>
        <DrawerHeader className={'whitespace-pre-wrap'}>
          <DrawerTitle
            className={cn(
              headerAsLabel
                ? 'text-small-writing font-medium'
                : 'text-small-title font-bold leading-[29px]',
            )}
          >
            {title}
          </DrawerTitle>
        </DrawerHeader>
        {content}
        <DrawerFooter>{...actions}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BottomSheet;
