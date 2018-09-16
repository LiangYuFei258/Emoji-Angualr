import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyHotComponent } from './body-hot.component';

describe('BodyHotComponent', () => {
  let component: BodyHotComponent;
  let fixture: ComponentFixture<BodyHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
