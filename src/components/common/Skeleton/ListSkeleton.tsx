import { Skeleton } from '@/components/ui/skeleton.tsx';

const ListSkeleton = () => {
  return (
    <div className={'flex flex-row gap-4 px-6 py-6 items-center'}>
      <Skeleton className={'w-10 h-10 rounded-full'} />
      <Skeleton className={'w-full h-10'} />
    </div>
  );
};

export default ListSkeleton;
