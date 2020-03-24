import { NairobiRequest } from './shared/store/actions/nairobi.actions';
import { UrubiciRequest } from './shared/store/actions/urubici.actions';
import { NuukRequest } from './shared/store/actions/nuuk.actions';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppContainerComponent } from './app.container';
import { CardModule, DataLabelModule } from 'weather-lib/';
import { StoreModule } from '@ngrx/store';

describe('AppComponent', () => {
  let component: AppContainerComponent;
  let fixture: ComponentFixture<AppContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CardModule,
        DataLabelModule,
        StoreModule.forRoot([]),
      ],
      declarations: [
        AppContainerComponent,
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppContainerComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should updates weather', () => {
    const dispatchSpy = spyOn(component['store'], 'dispatch');

    component.updateWeather();

    expect(dispatchSpy).toHaveBeenCalled();
  });

  it('should retries nuuk weather request', () => {
    const dispatchSpy = spyOn(component['store'], 'dispatch');

    component.onRetry('Nuuk');

    expect(dispatchSpy).toHaveBeenCalledWith(NuukRequest());
  });

  it('should retries urubici weather request', () => {
    const dispatchSpy = spyOn(component['store'], 'dispatch');

    component.onRetry('Urubici');

    expect(dispatchSpy).toHaveBeenCalledWith(UrubiciRequest());
  });

  it('should retries nairobi weather request', () => {
    const dispatchSpy = spyOn(component['store'], 'dispatch');

    component.onRetry('Nairobi');

    expect(dispatchSpy).toHaveBeenCalledWith(NairobiRequest());
  });

  it('should calls updateWeather', () => {
    const updateWeatherSpy = spyOn(component, 'updateWeather');

    component.ngOnInit();

    expect(updateWeatherSpy).toHaveBeenCalled();
  });
});
