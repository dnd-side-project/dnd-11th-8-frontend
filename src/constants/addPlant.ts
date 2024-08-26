export const 마지막으로물비료준날선택값목록 = [
  {
    name: '오늘',
    value: 1,
  },
  {
    name: '어제',
    value: 2,
  },
  {
    name: '3~4일 전',
    value: 3,
  },
  {
    name: '일주일 전',
    value: 4,
  },
  {
    name: '이주 혹은 그 이상 전',
    value: 5,
  },
  {
    name: '잘 모르겠어요',
    value: 6,
  },
];

export const 마지막으로물비료준날선택값목록_텍스트 = new Map(
  마지막으로물비료준날선택값목록.map((item) => [item.value.toString(), item.name]),
);
