import GuideDetailsProps from '@/types/GuideDetailsProps';

const DetailItem: React.FC<{
  item: GuideDetailsProps['detailView'][keyof GuideDetailsProps['detailView']];
}> = ({ item }) => (
  <div className="px-[24px]">
    <img src={item.icon} alt="아이콘" />
    <h3 className="text-[17px] font-bold text-LabelNormal py-[10px]">{item.title}</h3>
    {item.springsummerfallSubTitle && (
      <>
        <h4 className="mb-[5px] font-bold text-[13px] text-Gray600">
          {item.springsummerfallSubTitle}
        </h4>
        <p
          className="text-[13px] font-normal text-Gray600"
          dangerouslySetInnerHTML={{ __html: item.springsummerfallDescription || '' }}
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
          dangerouslySetInnerHTML={{ __html: item.winterDescription || '' }}
        />
      </>
    )}
    {item.lightSubTitle && (
      <>
        <h4 className="mb-[5px] font-bold text-[13px] text-Gray600">{item.lightSubTitle}</h4>
        <p
          className="text-[13px] font-normal text-Gray600"
          dangerouslySetInnerHTML={{ __html: item.lightDescription || '' }}
        />
      </>
    )}
    {item.description && (
      <p
        className="text-[13px] font-normal text-Gray600"
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
    )}
    {item.addition && (
      <div className="bg-GrayOpacity100 py-[10px] px-[20px] text-[11px] font-semibold rounded-[10px] mt-[10px] text-Gray600">
        {item.addition}
      </div>
    )}
  </div>
);

export default DetailItem;
