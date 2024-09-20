const FloatingButtonIcon = ({ rotate = false }: { rotate?: boolean }) => {
  return (
    <div
      className={'w-[56px] h-[56px] bg-BloomingGreen500 rounded-full relative transition-all'}
      style={{
        rotate: rotate ? '45deg' : '0deg',
      }}
    >
      <span
        className={
          'w-[20px] h-[2.63px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[30px]'
        }
      />
      <span
        className={
          'w-[2.63px] h-[20px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[30px]'
        }
      />
    </div>
  );
};

export default FloatingButtonIcon;
