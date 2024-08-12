import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MyPlantLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={`mt-[30px] bg-white h-[1200px] min-w-[344px] max-w-[768px]'}`}>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default MyPlantLayout;
