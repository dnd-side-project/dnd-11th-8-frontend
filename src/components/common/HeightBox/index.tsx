interface HeightBoxProps {
  height: number;
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
