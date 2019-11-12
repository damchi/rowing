import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachTypeExerciceComponent } from './coach-type-exercice.component';

describe('CoachTypeExerciceComponent', () => {
  let component: CoachTypeExerciceComponent;
  let fixture: ComponentFixture<CoachTypeExerciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachTypeExerciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachTypeExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
