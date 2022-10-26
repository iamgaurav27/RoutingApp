import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreezaComponent } from './breeza.component';

describe('BreezaComponent', () => {
  let component: BreezaComponent;
  let fixture: ComponentFixture<BreezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreezaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
