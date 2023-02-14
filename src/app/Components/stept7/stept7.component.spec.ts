import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stept7Component } from './stept7.component';

describe('Stept7Component', () => {
  let component: Stept7Component;
  let fixture: ComponentFixture<Stept7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stept7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stept7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
