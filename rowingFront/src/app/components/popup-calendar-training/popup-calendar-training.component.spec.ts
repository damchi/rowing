import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCalendarTrainingComponent } from './popup-calendar-training.component';

describe('PopupCalendarTrainingComponent', () => {
  let component: PopupCalendarTrainingComponent;
  let fixture: ComponentFixture<PopupCalendarTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCalendarTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCalendarTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
