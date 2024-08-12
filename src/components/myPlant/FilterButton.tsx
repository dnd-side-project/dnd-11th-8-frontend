import downArrow from '@/assets/icon/downArrow.svg';

const FilterButton = () => {
  return (
    <>
      <button className="flex items-center justify-center gap-[6px] text-Gray500">
        <p>최근 등록순</p>
        <img src={downArrow} alt="아래 화살표" />
      </button>
    </>
  );
};

export default FilterButton;
