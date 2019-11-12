import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNewTypeExerciceComponent } from './popup-new-type-exercice.component';

describe('PopupNewTypeExerciceComponent', () => {
  let component: PopupNewTypeExerciceComponent;
  let fixture: ComponentFixture<PopupNewTypeExerciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupNewTypeExerciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNewTypeExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
