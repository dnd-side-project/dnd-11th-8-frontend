interface MostRecentImageProps {
  image?: {
    imageUrl: string;
    favorite: boolean;
    createdDate: string;
  };
}

const MostRecentImage = ({ image }: MostRecentImageProps) => {
  return (
    <img
      alt="edit my plant represent image"
      src={image?.imageUrl}
      className="w-full aspect-square rounded-[10px] overflow-hidden"
    />
  );
};

export default MostRecentImage;
