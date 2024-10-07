import React from 'react';

interface CurrentSlideProps {
  currentSlide: number;
  length: number;
}

const CurrentSlide: React.FC<CurrentSlideProps> = ({ currentSlide, length }) => {
  return (
    <>
      {length > 1 && (
        <div className="flex justify-center items-center gap-[5px]">
          {Array.from({ length }).map((_, index) => (
            <div
              key={index}
              className={`w-[7px] h-[7px] rounded-full ${
                currentSlide - 1 === index ? 'bg-[#34C184] w-[9.28px] h-[9.28px]' : 'bg-Gray300'
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CurrentSlide;
