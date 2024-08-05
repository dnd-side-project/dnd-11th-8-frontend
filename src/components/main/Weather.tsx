import Card from '../common/Card';
import humidWeather from '@/assets/icon/humidWeather.svg';

const Weather = () => {
  return (
    <div className="max-w-[186px]">
      <Card.Container verticalPaddingSize={'small'}>
        <Card.Content className={'flex flex-col pb-0 gap-[7px]'}>
          <div>
            <img src={humidWeather} alt="날씨 아이콘" />
          </div>

          <div className="font-bold text-Gray900 text-small-writing">
            <p>과습 주의보</p>
          </div>

          <div className="text-[12px] text-Gray700">
            <p>3일 이상 비가 오는 날씨에는 과습 위헙이 있습니다.</p>
            <p>물 주기 전 흙의 상태를 확인하고 과습을 피하세요.</p>
          </div>
        </Card.Content>
      </Card.Container>
    </div>
  );
};

export default Weather;
