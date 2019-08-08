import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachCategoriesComponent } from './coach-categories.component';

describe('CoachCategoriesComponent', () => {
  let component: CoachCategoriesComponent;
  let fixture: ComponentFixture<CoachCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
