import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorViewComponent } from './minor-view.component';

describe('MinorViewComponent', () => {
  let component: MinorViewComponent;
  let fixture: ComponentFixture<MinorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
