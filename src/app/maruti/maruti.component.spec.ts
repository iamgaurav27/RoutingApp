import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarutiComponent } from './maruti.component';

describe('MarutiComponent', () => {
  let component: MarutiComponent;
  let fixture: ComponentFixture<MarutiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarutiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
