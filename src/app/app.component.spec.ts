import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CardModule } from 'weather-lib/';
import { StoreModule } from '@ngrx/store';
import { DataLabelModule } from 'weather-lib/public-api';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CardModule,
        DataLabelModule,
        StoreModule.forRoot([]),
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
