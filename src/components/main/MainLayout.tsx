const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-Gray50 min-h-screen min-w-[344px] max-w-[768px]">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default MainLayout;
