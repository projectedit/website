import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkbtnComponent } from './linkbtn.component';

describe('LinkbtnComponent', () => {
  let component: LinkbtnComponent;
  let fixture: ComponentFixture<LinkbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkbtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
