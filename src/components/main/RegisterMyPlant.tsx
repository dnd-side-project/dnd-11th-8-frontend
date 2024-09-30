interface RegisterMyPlantProps {
  greetingMessage: string;
}

const RegisterMyPlant: React.FC<RegisterMyPlantProps> = ({ greetingMessage }) => {
  return (
    <div>
      <div className="text-small-title text-Gray900 pt-[36.1px] pb-[30.3px] whitespace-pre-wrap">
        <p>{greetingMessage}</p>
      </div>
    </div>
  );
};

export default RegisterMyPlant;
