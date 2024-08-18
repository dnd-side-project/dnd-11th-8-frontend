import React from 'react';

interface HeightBoxProps {
  height: React.CSSProperties['height'];
}

const HeightBox = ({ height }: HeightBoxProps) => {
  return (
    <div
      style={{
        height,
        width: '100%',
      }}
    />
  );
};

export default HeightBox;
