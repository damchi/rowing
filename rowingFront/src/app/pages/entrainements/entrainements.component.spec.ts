import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrainementsComponent } from './entrainements.component';

describe('EntrainementsComponent', () => {
  let component: EntrainementsComponent;
  let fixture: ComponentFixture<EntrainementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrainementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrainementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
