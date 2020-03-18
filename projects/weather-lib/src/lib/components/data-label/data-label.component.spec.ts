import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DataLabelComponent } from './data-label.component';

describe('DataLabelComponent', () => {
  let component: DataLabelComponent;
  let fixture: ComponentFixture<DataLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLabelComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should shows label', () => {
    const element = fixture.debugElement.query(By.css('.data-label__label')).nativeElement;

    component.label = 'Label';

    fixture.detectChanges();

    expect(element.innerHTML).toBe('Label');
  });

  it('should shows label', () => {
    const element = fixture.debugElement.query(By.css('.data-label__data')).nativeElement;

    component.data = 'Data';

    fixture.detectChanges();

    expect(element.innerHTML).toBe('Data');
  });
});
