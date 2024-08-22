import React from 'react';
import alim1 from '@/assets/icon/alim1.svg';
import alim2 from '@/assets/icon/alim2.svg';
import alim3 from '@/assets/icon/alim3.svg';

interface Alim {
  id: number;
  plantId: number;
  icon: string;
  plantName: string;
  alimContent: string;
  day: string;
  read: boolean;
}

const initialAlimData: Alim[] = [
  {
    id: 1,
    plantId: 1,
    icon: alim1,
    plantName: '루밍이',
    alimContent: '루밍이는 비료가 필요해요.',
    day: '7일전',
    read: false,
  },
  {
    id: 2,
    plantId: 1,
    icon: alim2,
    plantName: '루밍이',
    alimContent: '식물 등록이 완료되었어요!',
    day: '1일전',
    read: false,
  },
  {
    id: 3,
    plantId: 1,
    icon: alim3,
    plantName: '루밍이',
    alimContent: '루밍이는 물이 필요해요.',
    day: '3일전',
    read: false,
  },
];

const parseDay = (day: string): number => {
  const match = day.match(/(\d+)일전/);
  return match ? parseInt(match[1], 10) : 0;
};

const AlimList = () => {
  const [alims, setAlims] = React.useState<Alim[]>(initialAlimData);

  const handleClick = (id: number) => {
    setAlims(alims.map((alim) => (alim.id === id ? { ...alim, read: true } : alim)));
  };

  const unreadAlims = alims
    .filter((alim) => !alim.read)
    .sort((b, a) => parseDay(b.day) - parseDay(a.day));

  const readAlims = alims
    .filter((alim) => alim.read)
    .sort((b, a) => parseDay(b.day) - parseDay(a.day));

  const sortedAlims = [...unreadAlims, ...readAlims];

  return (
    <div className="p-4">
      <div className="space-y-4">
        {sortedAlims.map((alim) => (
          <div
            key={alim.id}
            className="flex justify-between gap-4 px-4 py-5 bg-white rounded-lg cursor-pointer"
            onClick={() => handleClick(alim.id)}
          >
            <div className="flex items-center gap-[10px]">
              <div className="relative">
                <div className="flex items-center justify-center w-[44px] h-[44px] bg-Gray100 rounded-full">
                  <img src={alim.icon} alt={alim.plantName} className="w-[24px] h-[24px]" />
                  {!alim.read && (
                    <div className="absolute top-1 left-1 w-[6px] h-[6px] bg-BloomingGreen500 rounded-full"></div>
                  )}
                </div>
              </div>
              <div>
                <h2 className="text-[15px] font-semibold text-Gray900">{alim.plantName}</h2>
                <p className="text-[#333D48] text-[13px] font-medium">{alim.alimContent}</p>
              </div>
            </div>
            <div>
              <p className="text-[13px] text-Gray500 font-normal">{alim.day}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlimList;
