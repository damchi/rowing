import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachEntrainementsComponent } from './coach-entrainements.component';

describe('CoachEntrainementsComponent', () => {
  let component: CoachEntrainementsComponent;
  let fixture: ComponentFixture<CoachEntrainementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachEntrainementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachEntrainementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
