import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnaComponent } from './patna.component';

describe('PatnaComponent', () => {
  let component: PatnaComponent;
  let fixture: ComponentFixture<PatnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
