import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XuvComponent } from './xuv.component';

describe('XuvComponent', () => {
  let component: XuvComponent;
  let fixture: ComponentFixture<XuvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XuvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
