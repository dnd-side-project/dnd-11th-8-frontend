import React from 'react';
import AlimSmallLogo from '@/assets/icon/AlimSmallLogo.jpg';

const initialAlimData: Alim[] = [
  {
    id: 1,
    plantId: 1,
    plantName: '루밍이',
    alimContent: '루밍이는 비료가 필요해요.',
    day: '7일전',
    read: false,
  },
  {
    id: 2,
    plantId: 1,
    plantName: '루밍이',
    alimContent: '식물 등록이 완료되었어요!',
    day: '1일전',
    read: false,
  },
  {
    id: 3,
    plantId: 1,
    plantName: '루밍이',
    alimContent: '루밍이는 물이 필요해요.',
    day: '3일전',
    read: false,
  },
];

interface Alim {
  id: number;
  plantId: number;
  plantName: string;
  alimContent: string;
  day: string;
  read: boolean;
}

const parseDay = (day: string): number => {
  const match = day.match(/(\d+)일전/);
  return match ? parseInt(match[1], 10) : 0;
};

const AlimItem: React.FC<{ alim: Alim; onClick: () => void }> = ({ alim, onClick }) => (
  <div className="flex flex-col gap-4 p-4 bg-white rounded-lg" onClick={onClick}>
    <div className={'flex flex-row justify-between items-center w-full'}>
      <header className={'flex flex-row gap-1.5 items-center'}>
        <img
          src={AlimSmallLogo}
          alt={alim.plantName}
          className={'w-5 h-5 object-cover rounded-full overflow-hidden'}
        />
        <div className={'text-small-writing font-medium text-Gray600'}>블루밍</div>
      </header>
      <div className={'relative'}>
        <p className={'text-small-writing font-light text-Gray400'}>{alim.day}</p>
        {!alim.read && (
          <div
            className={'absolute -top-1 -right-2 w-1.5 h-1.5 rounded-full bg-BloomingGreen500'}
          />
        )}
      </div>
    </div>
    <p className={'text-small-writing text-Gray900'}>{alim.alimContent}</p>
  </div>
);

const AlimList: React.FC = () => {
  const [alims, setAlims] = React.useState<Alim[]>(initialAlimData);

  const handleClick = (id: number) => {
    setAlims(alims.map((alim) => (alim.id === id ? { ...alim, read: true } : alim)));
  };

  const sortedAlims = [
    ...alims.filter((alim) => !alim.read).sort((a, b) => parseDay(b.day) - parseDay(a.day)),
    ...alims.filter((alim) => alim.read).sort((a, b) => parseDay(b.day) - parseDay(a.day)),
  ];

  return (
    <div className="p-4">
      <div className="space-y-4">
        {sortedAlims.map((alim) => (
          <AlimItem key={alim.id} alim={alim} onClick={() => handleClick(alim.id)} />
        ))}
      </div>
    </div>
  );
};

export default AlimList;
