export type WeatherStatus = 'HUMIDITY' | 'INSECT' | 'HOT' | 'DRY' | 'COLD';

export interface WeatherMessage {
  status: WeatherStatus;
  title: string;
  message: string[];
}
