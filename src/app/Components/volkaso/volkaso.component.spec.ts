import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolkasoComponent } from './volkaso.component';

describe('VolkasoComponent', () => {
  let component: VolkasoComponent;
  let fixture: ComponentFixture<VolkasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolkasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolkasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
