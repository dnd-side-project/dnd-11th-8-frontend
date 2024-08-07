import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  register: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, register }) => {
  return (
    <div
      className={`bg-Gray50 ${register ? 'h-[1040px]' : 'min-h-screen'} min-w-[344px] max-w-[768px]'}`}
    >
      <div className="w-full">{children}</div>
    </div>
  );
};

export default MainLayout;
