import { ReactNode } from 'react';
import { cn } from '@/utils.ts';
import { Dialog, DialogContent, DialogDescription, DialogFooter } from '@/components/ui/dialog.tsx';

interface CenterBottomSheetProps {
  title: string | ReactNode;
  content: ReactNode;
  actions: ReactNode[];
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  headerAsLabel?: boolean;
  actionDirection?: 'row' | 'column';
}

const CenterBottomSheet = ({
  isOpen,
  onOpenChange,
  title,
  content,
  actions,
  headerAsLabel,
  actionDirection = 'column',
}: CenterBottomSheetProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className={'rounded-3xl'}>
        <div className="flex justify-center my-2.5">
          <div className="w-12 h-1 bg-Gray100 rounded-full" />
        </div>
        <header
          className={cn(
            'text-start px-2.5 text-Gray800 whitespace-pre-wrap',
            headerAsLabel
              ? 'text-small-writing font-medium'
              : 'text-small-title font-bold leading-[29px]',
          )}
        >
          {title}
        </header>
        <DialogDescription>{content}</DialogDescription>
        <DialogFooter
          className={cn(
            'flex mt-[30px] gap-3',
            actionDirection === 'row' ? 'flex-row' : 'flex-col',
          )}
        >
          {...actions}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CenterBottomSheet;
