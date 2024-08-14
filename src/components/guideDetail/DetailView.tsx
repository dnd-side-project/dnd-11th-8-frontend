import GuideDetailsProps from '@/types/GuideDetailsProps';

import DetailItem from './DetailItem';

const DetailView: React.FC<{ items: GuideDetailsProps['detailView'] }> = ({ items }) => {
  const keys = Object.keys(items) as Array<keyof typeof items>;

  return (
    <div className="w-full max-w-md mb-[140px]">
      {keys.map((key) => (
        <div key={key}>
          <div className="mb-[40px] w-full h-[10px] bg-Gray100 border-Gray500" />
          <DetailItem item={items[key]} />
        </div>
      ))}
    </div>
  );
};

export default DetailView;
