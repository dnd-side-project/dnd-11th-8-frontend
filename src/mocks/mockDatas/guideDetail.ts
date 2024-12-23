import GuideDetailsProps from '@/types/GuideDetailsProps.ts';

export const plantGuide: GuideDetailsProps = {
  korName: '몬스테라 델리오사',
  engName: 'Monstera Deliosa',
  imageUrl: 'https://blog.kakaocdn.net/dn/NOY0P/btrgofuZjEj/sFLrwaf9sZnaePSPiLExB0/img.jpg',
  tag: ['초보 식집사용', '독특한 외관', '잎이 갈라진', '광택'],
  simpleView: {
    difficulty: {
      title: '난이도',
      description: '초보식집사 맞춤형',
    },
    water: {
      title: '물주기',
      description: '일주일에 한번 항상 \n촉촉하게 유지할 것',
    },
    temperature: {
      title: '온도',
      description: '18~27도 사이\n15도 이하는 주의할 것',
    },
    location: {
      title: '장소',
      description: '거실발코니안쪽',
    },
    pests: {
      title: '병해충',
      description: '응애,깍지벌레',
    },
    fertilizer: {
      title: '비료',
      description: '(봄,여름)\n2주에 한번 수용성 비료',
    },
    size: {
      title: '크기',
      description: '높이: 150cm\n넓이: 100cm',
    },
    toxicity: {
      title: '독성',
      description: '동물이나 어린이 주변에 두지 말 것',
    },
  },
  detailView: {
    water: {
      title: '물주기',
      springsummerfallSubTitle: '봄,여름,가을',
      springsummerfallDescription:
        '흙은 항상 촉촉하게 유지해주세요. 다만 물에 잠기지 않도록\n 주의하는 것이 좋으며 일주일에 한번 정도가 적당해요.',
      winterSubTitle: '겨울',
      winterDescription: '토양 표면이 말랐을때 충분히 물을 주세요.',
      addition:
        '빗물을 주면 토양이 산성화 될 수도 있어요.따뜻한 물을 사용하고\n더운 여름에는 젖은 천으로 잎을 닦아 주고, 분무해 주세요.',
    },
    light: {
      title: '빛',
      lightSubTitle: '광요구도',
      lightDescription: '중간 광도(800~1,500 Lux),높은 광도(1,500~10,000 Lux)',
      addition:
        '몬스테라는 간접적인 밝은 빛을 가장 좋아합니다.\n직사광선은 잎을 태울 수 있으므로 피하는 것이 좋아요.',
    },
    humidity: {
      title: '습도',
      description: '몬스테라는 높은 습도를 좋아해요. \n60% 이상의 습도가 가장 이상적이예요.',
      addition:
        '습도를 높이기 위해 자주 분무하거나, 식물 주변에 물그릇을 놓아\n습도를 유지할 수 있어요. 가습기를 사용하는 것도 좋아요.',
    },
    toxicity: {
      title: '독성',
      description:
        '몬스테라는 잎과 줄기에 독성이 있어 반려동물과 어린 아이들이\n먹지 않도록 주의해야 합니다. 섭취 시 입 안의 자극, 구토, 설사\n등의 증상이 나타날 수 있어요.',
    },
    pests: {
      title: '병충해',
      description:
        '몬스테라는 잎과 줄기에 독성이 있어 반려동물과 어린 아이들이\n먹지 않도록 주의해야 합니다. 섭취 시 입 안의 자극, 구토, 설사\n등의 증상이 나타날 수 있어요.',
    },
  },
};
