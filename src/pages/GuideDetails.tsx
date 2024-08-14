import TopButton from '@/components/guideDetail/TopButton';
import difficultyIcon from '@/assets/icon/guideDetailDifficulty.svg';
import waterIcon from '@/assets/icon/guideDetailWater.svg';
import Badge from '@/components/common/Badge';

const plantGuide: GuideDetailsProps = {
  korName: '몬스테라 델리오사',
  engName: 'Monstera Deliosa',
  imageUrl: 'https://blog.kakaocdn.net/dn/NOY0P/btrgofuZjEj/sFLrwaf9sZnaePSPiLExB0/img.jpg',
  tag: ['초보 식집사용', '독특한 외관', '잎이 갈라진', '광택'],
  simpleView: {
    difficulty: {
      icon: difficultyIcon,
      title: '난이도',
      description: '초보식집사 맞춤형',
    },
    water: {
      icon: waterIcon,
      title: '물주기',
      description: '일주일에 한번<br/>항상 촉촉하게 유지할 것',
    },
    pests: {
      icon: waterIcon,
      title: '병해충',
      description: '응애,깍지벌레',
    },
    location: {
      icon: waterIcon,
      title: '장소',
      description: '거실발코니안쪽',
    },
    size: {
      icon: waterIcon,
      title: '크기',
      description: '높이: 150cm<br/>넓이: 100cm',
    },
    toxicity: {
      icon: waterIcon,
      title: '독성',
      description: '동물이나 어린이 주변에 두지 말 것',
    },
    temperature: {
      icon: waterIcon,
      title: '온도',
      description: '18~27도 사이<br/>15도 이하는 주의할 것',
    },
    fertilizer: {
      icon: waterIcon,
      title: '비료',
      description: '(봄,여름)<br/>2주에 한번 수용성 비료',
    },
  },
  detailView: {
    water: {
      icon: waterIcon,
      title: '물주기',
      springsummerfallSubTitle: '봄,여름,가을',
      springsummerfallDescription:
        '흙은 항상 촉촉하게 유지해주세요. 다만 물에 잠기지 않도록<br/> 주의하는 것이 좋으며 일주일에 한번 정도가 적당해요.',
      winterSubTitle: '겨울',
      winterDescription: '토양 표면이 말랐을때 충분히 물을 주세요.',
      addition:
        '빗물을 주면 토양이 산성화 될 수도 있어요.따뜻한 물을 사용하고<br/>더운 여름에는 젖은 천으로 잎을 닦아 주고, 분무해 주세요.',
    },
    light: {
      icon: waterIcon,
      title: '빛',
      lightSubTitle: '광요구도',
      lightDescription: '중간 광도(800~1,500 Lux),높은 광도(1,500~10,000 Lux)',
      addition:
        '몬스테라는 간접적인 밝은 빛을 가장 좋아합니다.<br/>직사광선은 잎을 태울 수 있으므로 피하는 것이 좋아요.',
    },
    humidity: {
      icon: waterIcon,
      title: '습도',
      description: '몬스테라는 높은 습도를 좋아해요.<br/>60% 이상의 습도가 가장 이상적이예요.',
      addition:
        '습도를 높이기 위해 자주 분무하거나, 식물 주변에 물그릇을 놓아<br/>습도를 유지할 수 있어요. 가습기를 사용하는 것도 좋아요.',
    },
    toxicity: {
      icon: waterIcon,
      title: '독성',
      description:
        '몬스테라는 잎과 줄기에 독성이 있어 반려동물과 어린 아이들이<br/>먹지 않도록 주의해야 합니다. 섭취 시 입 안의 자극, 구토, 설사<br/>등의 증상이 나타날 수 있어요.',
    },
    pests: {
      icon: waterIcon,
      title: '병충해',
      description:
        '몬스테라는 잎과 줄기에 독성이 있어 반려동물과 어린 아이들이<br/>먹지 않도록 주의해야 합니다. 섭취 시 입 안의 자극, 구토, 설사<br/>등의 증상이 나타날 수 있어요.',
    },
  },
};

interface SimpleViewItem {
  icon: string;
  title: string;
  description: string;
}

interface DetailedViewItem {
  icon: string;
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

const GuideDetails: React.FC = () => {
  const simpleViewKeys = Object.keys(plantGuide.simpleView) as Array<
    keyof typeof plantGuide.simpleView
  >;
  const detailViewKeys = Object.keys(plantGuide.detailView) as Array<
    keyof typeof plantGuide.detailView
  >;

  return (
    <>
      <TopButton />
      <div className="flex flex-col items-center max-w-full px-6 h-[327px]">
        <img
          src={plantGuide.imageUrl}
          alt="식물 사진"
          className="w-full min-w-[327px] h-full rounded-[10px] object-cover"
        />
      </div>

      <div className="flex flex-col mt-4 text-left px-[24px]">
        <p className="text-[20px] text-Gray900 font-semibold">{plantGuide.korName}</p>
        <p className="text-Gray600 text-[13px] font-normal">{plantGuide.engName}</p>
        <div className="flex space-x-2 mt-[20px]">
          {plantGuide.tag.map((t, index) => (
            <div key={index}>
              <Badge
                type="button"
                text={t}
                className="border bg-Gray50 border-GrayOpacity100 text-Gray800 rounded-[13px] px-[10px] py-[4px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* SimpleView */}
        <h1 className="px-[24px] py-[10px] text-LabelNormal text-[18px] font-bold	mt-[27.5px]">
          한 눈에 보는 식물 정보
        </h1>
        <div className="grid w-full max-w-md grid-cols-2 gap-2 px-[24px] mt-[7px]">
          {simpleViewKeys.map((key) => (
            <div
              key={key}
              className="bg-GrayOpacity100 w-[160px] h-[128px] rounded-[10px] flex flex-col px-[20px] py-[15px] gap-[8px]"
            >
              <div>
                <img
                  className="w-[24px] h-[24px]"
                  src={plantGuide.simpleView[key].icon}
                  alt="아이콘"
                />
              </div>
              <div>
                <h3 className="text-Gray900 text-[15px] font-semibold	">
                  {plantGuide.simpleView[key].title}
                </h3>
                <p
                  className="mt-[8px] text-[13px] text-Gray600 font-medium w-full"
                  dangerouslySetInnerHTML={{ __html: plantGuide.simpleView[key].description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DetailView */}
      <div className="w-full max-w-md mb-[140px]">
        {detailViewKeys.map((key) => (
          <>
            <div key={key}>
              <div className="mb-[40px] mt-[40px] w-full h-[10px] bg-Gray100 border-Gray500" />

              <div className="px-[24px]">
                <img src={plantGuide.detailView[key].icon} alt="아이콘" />
                <h3 className="text-[17px] font-bold text-LabelNormal py-[10px]">
                  {plantGuide.detailView[key].title}
                </h3>
                {plantGuide.detailView[key].springsummerfallSubTitle && (
                  <>
                    <h4 className="mb-[5px] font-bold text-[13px] text-Gray600">
                      {plantGuide.detailView[key].springsummerfallSubTitle}
                    </h4>
                    <p
                      className="text-[13px] font-normal text-Gray600"
                      dangerouslySetInnerHTML={{
                        __html: plantGuide.detailView[key].springsummerfallDescription || '',
                      }}
                    />
                  </>
                )}
                {plantGuide.detailView[key].winterSubTitle && (
                  <>
                    <h4 className="mb-[5px] mt-[10px] font-bold text-[13px] text-Gray600">
                      {plantGuide.detailView[key].winterSubTitle}
                    </h4>
                    <p
                      className="text-[13px] font-normal text-Gray600"
                      dangerouslySetInnerHTML={{
                        __html: plantGuide.detailView[key].winterDescription || '',
                      }}
                    />
                  </>
                )}
                {plantGuide.detailView[key].lightSubTitle && (
                  <>
                    <h4 className="mb-[5px] font-bold text-[13px] text-Gray600">
                      {plantGuide.detailView[key].lightSubTitle}
                    </h4>
                    <p
                      className="text-[13px] font-normal text-Gray600"
                      dangerouslySetInnerHTML={{
                        __html: plantGuide.detailView[key].lightDescription || '',
                      }}
                    />
                  </>
                )}
                {plantGuide.detailView[key].description && (
                  <p
                    className="text-[13px] font-normal text-Gray600"
                    dangerouslySetInnerHTML={{ __html: plantGuide.detailView[key].description }}
                  />
                )}
                {plantGuide.detailView[key].addition && (
                  <div className="bg-GrayOpacity100 py-[10px] px-[20px] text-[11px] font-semibold rounded-[10px] mt-[10px] text-Gray600">
                    {plantGuide.detailView[key].addition}
                  </div>
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default GuideDetails;
