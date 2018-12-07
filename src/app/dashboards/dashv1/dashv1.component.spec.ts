import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashv1Component } from './dashv1.component';

describe('Dashv1Component', () => {
  let component: Dashv1Component;
  let fixture: ComponentFixture<Dashv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashv1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
