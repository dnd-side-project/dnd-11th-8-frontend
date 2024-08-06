import Card from '../common/Card';

interface WetherProps {
  title: string;
  description: string;
  description2?: string;
  icon: string;
}

const Weather: React.FC<WetherProps> = ({ title, description, description2, icon }) => {
  return (
    <div className="min-w-[186px] mb-[100px]">
      <Card.Container verticalPaddingSize={'small'}>
        <Card.Content className={'flex flex-col pb-0 gap-[7px]'}>
          <div className="flex flex-col gap-[7px]">
            <div className="font-bold text-Gray900 text-small-writing">
              <p>{title}</p>
            </div>

            <div className="text-[12px] text-Gray700">
              <p className="whitespace-normal">{description}</p>
              {description2 && <p className="whitespace-normal">{description2}</p>}
            </div>
          </div>

          <div className="self-end mt-auto">
            <img src={icon} alt="아이콘" />
          </div>
        </Card.Content>
      </Card.Container>
    </div>
  );
};

export default Weather;
