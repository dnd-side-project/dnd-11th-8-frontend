import { LuLoader2 } from 'react-icons/lu';

const LoadingScreen = () => {
  return (
    <div className={'w-screen h-screen flex items-center justify-center'}>
      <LuLoader2 className={'animate-spin'} />
    </div>
  );
};

export default LoadingScreen;
