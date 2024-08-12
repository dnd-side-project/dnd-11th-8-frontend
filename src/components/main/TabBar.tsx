import React, { useState, useEffect } from 'react';
import GuideIcon from '@/components/main/tabBarIconComponent/Guide';
import HomeIcon from '@/components/main/tabBarIconComponent/Home';
import MyPlantsIcon from '@/components/main/tabBarIconComponent/MyPlant';
import useInternalRouter from '@/hooks/useInternalRouter';
import { useLocation } from 'react-router-dom';

const TabBar: React.FC = () => {
  const location = useLocation();
  const { push } = useInternalRouter();
  const [activeTab, setActiveTab] = useState<string>('');

  useEffect(() => {
    if (location.pathname === '/guide') {
      setActiveTab('guide');
    } else if (location.pathname === '/my-plant') {
      setActiveTab('myPlants');
    } else {
      setActiveTab('home');
    }
  }, [location.pathname]);

  const handleTabClick = (tab: string) => {
    let path: '/guide' | '/' | '/my-plant' = '/';

    switch (tab) {
      case 'guide':
        path = '/guide';
        break;
      case 'home':
        path = '/';
        break;
      case 'myPlants':
        path = '/my-plant';
        break;
      default:
        path = '/';
    }

    push(path);
    setActiveTab(tab);
  };

  const getIconColor = (tab: string) => (activeTab === tab ? '#363737' : '#D1D6DB');

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md border-Gray200 rounded-t-[24px] z-50">
      <div className="flex justify-around pt-[10px]">
        <TabItem
          icon={<GuideIcon className="w-[24px] h-[24px]" color={getIconColor('guide')} />}
          label="가이드"
          isActive={activeTab === 'guide'}
          onClick={() => handleTabClick('guide')}
        />
        <TabItem
          icon={<HomeIcon className="w-[24px] h-[24px]" color={getIconColor('home')} />}
          label="홈"
          isActive={activeTab === 'home'}
          onClick={() => handleTabClick('home')}
        />
        <TabItem
          icon={<MyPlantsIcon className="w-[24px] h-[24px]" color={getIconColor('myPlants')} />}
          label="내식물"
          isActive={activeTab === 'myPlants'}
          onClick={() => handleTabClick('myPlants')}
        />
      </div>
    </div>
  );
};

interface TabItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabItem: React.FC<TabItemProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-2 ${isActive && 'filter'}`}
      onClick={onClick}
    >
      {icon}
      <span className={`text-sub-typo ${isActive ? 'text-Gray800' : 'text-Gray400'}`}>{label}</span>
    </div>
  );
};

export default TabBar;
