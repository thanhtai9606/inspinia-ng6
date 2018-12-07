import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasedashComponent } from './basedash.component';

describe('BasedashComponent', () => {
  let component: BasedashComponent;
  let fixture: ComponentFixture<BasedashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasedashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
