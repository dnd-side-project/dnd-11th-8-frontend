interface SimpleViewItem {
  title: string;
  description: string;
}

interface DetailedViewItem {
  title: string;
  springsummerfallSubTitle?: string;
  springsummerfallDescription?: string;
  winterSubTitle?: string;
  winterDescription?: string;
  lightSubTitle?: string;
  lightDescription?: string;
  description?: string;
  addition?: string;
}

interface GuideDetailsProps {
  korName: string;
  engName: string;
  imageUrl: string;
  tag: string[];
  simpleView: {
    difficulty: SimpleViewItem;
    water: SimpleViewItem;
    pests: SimpleViewItem;
    location: SimpleViewItem;
    size: SimpleViewItem;
    toxicity: SimpleViewItem;
    temperature: SimpleViewItem;
    fertilizer: SimpleViewItem;
  };
  detailView: {
    water: DetailedViewItem;
    light: DetailedViewItem;
    humidity: DetailedViewItem;
    toxicity: DetailedViewItem;
    pests: DetailedViewItem;
  };
}

export default GuideDetailsProps;
