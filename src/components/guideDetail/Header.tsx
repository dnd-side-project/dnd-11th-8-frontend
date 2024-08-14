import Badge from '@/components/common/Badge';

const Header: React.FC<{ korName: string; engName: string; imageUrl: string; tags: string[] }> = ({
  korName,
  engName,
  imageUrl,
  tags,
}) => (
  <>
    <div className="flex flex-col items-center max-w-full px-6 h-[327px]">
      <img
        src={imageUrl}
        alt="식물 사진"
        className="w-full min-w-[327px] h-full rounded-[10px] object-cover"
      />
    </div>
    <div className="flex flex-col mt-4 text-left px-[24px]">
      <p className="text-[20px] text-Gray900 font-semibold">{korName}</p>
      <p className="text-Gray600 text-[13px] font-normal">{engName}</p>
      <div className="flex gap-[5px] mt-[20px] text-[11px]">
        {tags.map((tag, index) => (
          <Badge
            key={index}
            type="button"
            text={tag}
            className="text-[11px] border bg-Gray50 border-GrayOpacity100 text-Gray800 rounded-[13px] px-[10px] py-[4px]"
          />
        ))}
      </div>
    </div>
  </>
);

export default Header;
