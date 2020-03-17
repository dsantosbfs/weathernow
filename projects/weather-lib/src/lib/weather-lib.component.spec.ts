import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLibComponent } from './weather-lib.component';

describe('WeatherLibComponent', () => {
  let component: WeatherLibComponent;
  let fixture: ComponentFixture<WeatherLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
