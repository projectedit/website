import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluzzlyComponent } from './fluzzly.component';

describe('FluzzlyComponent', () => {
  let component: FluzzlyComponent;
  let fixture: ComponentFixture<FluzzlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluzzlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluzzlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
