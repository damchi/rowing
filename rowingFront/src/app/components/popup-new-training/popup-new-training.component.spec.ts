import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNewTrainingComponent } from './popup-new-training.component';

describe('PopupNewTrainingComponent', () => {
  let component: PopupNewTrainingComponent;
  let fixture: ComponentFixture<PopupNewTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupNewTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNewTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
