import GuideDetailsProps from '@/types/GuideDetailsProps';

const DetailItem: React.FC<{
  item: GuideDetailsProps['detailView'][keyof GuideDetailsProps['detailView']];
  icon: string;
}> = ({ item, icon }) => {
  const formatDescription = (description?: string) => {
    return description ? { __html: description.replace(/\n/g, '<br />') } : { __html: '' };
  };

  return (
    <div className="px-[24px] mb-[40px]">
      <img src={icon} alt="아이콘" />
      <h3 className="text-[17px] font-bold text-LabelNormal py-[10px]">{item.title}</h3>
      {item.springsummerfallSubTitle && (
        <>
          <h4 className="mb-[5px] font-bold text-[13px] text-Gray600">
            {item.springsummerfallSubTitle}
          </h4>
          <p
            className="text-[13px] font-normal text-Gray600"
            dangerouslySetInnerHTML={formatDescription(item.springsummerfallDescription)}
          />
        </>
      )}
      {item.winterSubTitle && (
        <>
          <h4 className="mb-[5px] mt-[10px] font-bold text-[13px] text-Gray600">
            {item.winterSubTitle}
          </h4>
          <p
            className="text-[13px] font-normal text-Gray600"
            dangerouslySetInnerHTML={formatDescription(item.winterDescription)}
          />
        </>
      )}
      {item.lightSubTitle && (
        <>
          <h4 className="mb-[5px] font-bold text-[13px] text-Gray600">{item.lightSubTitle}</h4>
          <p
            className="text-[13px] font-normal text-Gray600"
            dangerouslySetInnerHTML={formatDescription(item.lightDescription)}
          />
        </>
      )}
      {item.description && (
        <p
          className="text-[13px] font-normal text-Gray600"
          dangerouslySetInnerHTML={formatDescription(item.description)}
        />
      )}
      {item.addition && (
        <div
          className="bg-GrayOpacity100 py-[10px] px-[20px] text-[11px] font-semibold rounded-[10px] mt-[10px] text-Gray600"
          dangerouslySetInnerHTML={formatDescription(item.addition)}
        />
      )}
    </div>
  );
};

export default DetailItem;
