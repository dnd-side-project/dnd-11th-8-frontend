interface RegisterFunnelTitleProps {
  title: string;
}

const RegisterFunnelTitle = ({ title }: RegisterFunnelTitleProps) => {
  return (
    <header className={'text-small-title font-semibold text-Gray900 whitespace-pre-wrap'}>
      {title}
    </header>
  );
};
export default RegisterFunnelTitle;
