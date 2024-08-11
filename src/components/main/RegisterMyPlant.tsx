interface RegisterMyPlantProps {
  greetingMessage: string;
}

const RegisterMyPlant: React.FC<RegisterMyPlantProps> = ({ greetingMessage }) => {
  return (
    <div>
      <div className="text-small-title text-Gray900 pt-[36.1px] pb-[30.3px]">
        {greetingMessage.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default RegisterMyPlant;
