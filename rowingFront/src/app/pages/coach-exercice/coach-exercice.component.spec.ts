import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachExerciceComponent } from './coach-exercice.component';

describe('CoachExerciceComponent', () => {
  let component: CoachExerciceComponent;
  let fixture: ComponentFixture<CoachExerciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachExerciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
