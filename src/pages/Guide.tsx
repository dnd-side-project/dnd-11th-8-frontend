import Search from '@/components/guide/Search';
import TopButton from '@/components/guide/TopButton';
import TabBar from '@/components/main/TabBar';
import Screen from '@/layouts/Screen';

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

export default Guide;
