import { StoreStateInterface } from './store-state.interface';

export interface WeatherInterface {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  updated_at: number;
}

export interface WeatherStateInterface extends StoreStateInterface {
  data: WeatherInterface;
}
