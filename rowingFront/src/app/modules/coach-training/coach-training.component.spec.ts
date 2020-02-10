import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachTrainingComponent } from './coach-training.component';

describe('CoachTrainingComponent', () => {
  let component: CoachTrainingComponent;
  let fixture: ComponentFixture<CoachTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
