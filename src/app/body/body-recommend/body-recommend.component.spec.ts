import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRecommentComponent } from './body-recommend.component';

describe('BodyRecommentComponent', () => {
  let component: BodyRecommentComponent;
  let fixture: ComponentFixture<BodyRecommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyRecommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRecommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
