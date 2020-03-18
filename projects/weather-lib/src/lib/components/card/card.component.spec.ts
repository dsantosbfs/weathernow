import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should shows low temperatures', () => {
    component.temperature = 3;

    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('.low-temperature')).nativeElement;

    expect(element).toBeTruthy();
  });

  it('should shows high temperatures', () => {
    component.temperature = 30;

    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('.high-temperature')).nativeElement;

    expect(element).toBeTruthy();
  });

  it('should shows loading state', () => {
    component.loading = true;

    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('.loading')).nativeElement;

    expect(element).toBeTruthy();
  });
});
