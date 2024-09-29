import Search from '@/components/guide/Search';
import TopButton from '@/components/guide/TopButton';
import TabBar from '@/components/main/TabBar';
import Screen from '@/layouts/Screen';
import { withDefaultAsyncBoundary } from '@/utils/asyncBoundary/withDefaultAsyncBoundary.tsx';

const Guide = () => {
  return (
    <>
      <Screen className="px-0">
        <TopButton />
        <Search />
        <TabBar />
      </Screen>
    </>
  );
};

export default withDefaultAsyncBoundary(Guide);
