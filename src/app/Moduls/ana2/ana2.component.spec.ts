import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ana2Component } from './ana2.component';

describe('Ana2Component', () => {
  let component: Ana2Component;
  let fixture: ComponentFixture<Ana2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ana2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ana2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
