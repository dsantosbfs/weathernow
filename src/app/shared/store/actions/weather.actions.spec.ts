import {
  WeatherLoad,
} from './weather.actions';

describe('WeatherActions', () => {
  it('should create WeatherLoad action', () => {
    const action = WeatherLoad();

    expect(action).toEqual({
      type: '[Weather] Load'
    });
  });
});
