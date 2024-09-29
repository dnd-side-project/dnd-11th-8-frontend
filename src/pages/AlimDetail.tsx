import AlimList from '@/components/alim/AlimList';
import TopButton from '@/components/alim/TopButton';
import Screen from '@/layouts/Screen';
import { withDefaultAsyncBoundary } from '@/utils/asyncBoundary/withDefaultAsyncBoundary.tsx';

const AlimDetail = () => {
  return (
    <Screen className="min-h-dvh bg-Gray100">
      <TopButton />
      <AlimList />
    </Screen>
  );
};

export default withDefaultAsyncBoundary(AlimDetail);
