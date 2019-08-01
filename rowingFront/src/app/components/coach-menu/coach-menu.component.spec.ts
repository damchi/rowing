import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachMenuComponent } from './coach-menu.component';

describe('CoachMenuComponent', () => {
  let component: CoachMenuComponent;
  let fixture: ComponentFixture<CoachMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
