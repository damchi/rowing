import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachPlanningComponent } from './coach-planning.component';

describe('CoachPlanningComponent', () => {
  let component: CoachPlanningComponent;
  let fixture: ComponentFixture<CoachPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
