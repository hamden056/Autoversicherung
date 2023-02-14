import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stept1Component } from './stept1.component';

describe('Stept1Component', () => {
  let component: Stept1Component;
  let fixture: ComponentFixture<Stept1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stept1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stept1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
