import { StoreStateInterface } from './store-state.interface';

export interface WeatherInterface {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  updated_at: number;
}

export interface WeatherStateInterface extends StoreStateInterface {
  data: WeatherInterface;
}
