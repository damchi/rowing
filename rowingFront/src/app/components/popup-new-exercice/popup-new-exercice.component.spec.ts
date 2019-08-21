import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNewExerciceComponent } from './popup-new-exercice.component';

describe('PopupNewExerciceComponent', () => {
  let component: PopupNewExerciceComponent;
  let fixture: ComponentFixture<PopupNewExerciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupNewExerciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNewExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
