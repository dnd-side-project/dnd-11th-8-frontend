import React, { useState } from 'react';
import guideIcon from '@/assets/icon/tab_bar_guide.svg';
import homeIcon from '@/assets/icon/tab_bar_home.svg';
import myPlantsIcon from '@/assets/icon/tab_bar_my_plant.svg';

const TabBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md border-Gray200 rounded-t-[24px]">
      <div className="flex justify-around pt-[10px]">
        <TabItem
          icon={guideIcon}
          label="가이드"
          isActive={activeTab === 'guide'}
          onClick={() => handleTabClick('guide')}
        />
        <TabItem
          icon={homeIcon}
          label="홈"
          isActive={activeTab === 'home'}
          onClick={() => handleTabClick('home')}
        />
        <TabItem
          icon={myPlantsIcon}
          label="내식물"
          isActive={activeTab === 'myPlants'}
          onClick={() => handleTabClick('myPlants')}
        />
      </div>
    </div>
  );
};

interface TabItemProps {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabItem: React.FC<TabItemProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-2 cursor-pointer ${isActive ? 'text-Gray800' : 'text-Gray-400'}`}
      onClick={onClick}
    >
      <img
        src={icon}
        alt={label}
        className={`w-[24px] h-[24px] mb-[3px] ${isActive && 'filter'}`}
      />
      <span className={`text-sub-typo ${isActive ? 'text-Gray800' : 'text-Gray400'}`}>{label}</span>
    </div>
  );
};

export default TabBar;
