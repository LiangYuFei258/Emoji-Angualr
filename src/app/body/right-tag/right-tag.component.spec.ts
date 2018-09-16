import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightTagComponent } from './right-tag.component';

describe('RightTagComponent', () => {
  let component: RightTagComponent;
  let fixture: ComponentFixture<RightTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
