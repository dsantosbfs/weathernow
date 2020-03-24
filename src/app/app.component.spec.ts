import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CardModule, DataLabelModule } from 'weather-lib/';
import { StoreModule } from '@ngrx/store';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

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

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should gets formatted time', () => {
    const time = component.getFormatedTime(1585062440840);

    expect(time).toEqual('12:07:20 PM');
  });

  it('should emits retry event', () => {
    component.$retry.subscribe(data => {
      expect(data).toBe('test');
    });

    component.onRetry('test');
  });
});
