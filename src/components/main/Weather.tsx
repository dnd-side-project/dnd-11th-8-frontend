import Card from '../common/Card';
import { IconType } from 'react-icons';

interface WeatherProps {
  title: string;
  description: string[];
  Icon?: string | IconType;
}

const Weather: React.FC<WeatherProps> = ({ title, description, Icon }) => {
  return (
    <div className="min-w-[186px]">
      <Card.Container verticalPaddingSize={'small'}>
        <Card.Content className={'flex flex-col pb-0 gap-[7px]'}>
          <div className="flex flex-col gap-[7px]">
            <div className="font-bold text-Gray900 text-small-writing">
              <p>{title}</p>
            </div>

            <div className="text-[12px] text-Gray700">
              {description.map((desc, index) => (
                <p key={index} className="whitespace-normal">
                  {desc}
                </p>
              ))}
            </div>
          </div>

          <div className="self-end mt-auto">
            {typeof Icon === 'string' ? (
              <img src={Icon} alt="아이콘" />
            ) : (
              Icon && <Icon size={30} />
            )}
          </div>
        </Card.Content>
      </Card.Container>
    </div>
  );
};

export default Weather;
