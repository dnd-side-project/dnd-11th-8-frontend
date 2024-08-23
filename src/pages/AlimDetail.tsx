import AlimList from '@/components/alim/AlimList';
import TopButton from '@/components/alim/TopButton';
import Screen from '@/layouts/Screen';

const AlimDetail = () => {
  return (
    <Screen className="h-screen bg-Gray100">
      <TopButton />
      <AlimList />
    </Screen>
  );
};

export default AlimDetail;
