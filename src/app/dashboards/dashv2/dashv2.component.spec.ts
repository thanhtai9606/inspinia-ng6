import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashv2Component } from './dashv2.component';

describe('Dashv2Component', () => {
  let component: Dashv2Component;
  let fixture: ComponentFixture<Dashv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
