interface MostRecentImageProps {
  image?: {
    imageUrl: string;
    favorite: boolean;
    createdDate: string;
  };
}

const MostRecentImage = ({ image }: MostRecentImageProps) => {
  return image?.imageUrl === undefined ? (
    <div
      className={
        'w-full aspect-square rounded-[10px] bg-Gray100 flex items-center justify-center text-Gray500'
      }
    >
      내 식물 사진을 추가해 주세요.
    </div>
  ) : (
    <img
      alt="edit my plant represent image"
      src={image?.imageUrl}
      className="w-full aspect-square rounded-[10px] overflow-hidden bg-Gray100"
    />
  );
};

export default MostRecentImage;
