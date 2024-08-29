export type WeatherStatus = 'HUMIDITY' | 'BUG';

export interface WeatherMessage {
  status: WeatherStatus;
  title: string;
  message: string[];
}
