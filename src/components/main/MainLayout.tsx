const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mobile:flex mobile:bg-Gray50">
      <div className="mobile:w-full">{children}</div>
    </div>
  );
};

export default MainLayout;
