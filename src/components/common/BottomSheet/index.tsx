import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer.tsx';
import { ReactNode } from 'react';

interface BottomSheetProps {
  title: string;
  content: ReactNode;
  actions: ReactNode[];
  isOpen: boolean;
  onClose: () => void;
}

const BottomSheet = ({ isOpen, onClose, title, content, actions }: BottomSheetProps) => {
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerContent>
        <DrawerHeader className={'whitespace-pre-wrap'}>
          <DrawerTitle className={'text-small-title font-bold leading-[29px]'}>{title}</DrawerTitle>
        </DrawerHeader>
        <main className={'px-[10px] max-h-[310px] overflow-auto'}>{content}</main>
        <DrawerFooter>{...actions}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BottomSheet;
