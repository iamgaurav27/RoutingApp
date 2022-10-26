import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErtigaComponent } from './ertiga.component';

describe('ErtigaComponent', () => {
  let component: ErtigaComponent;
  let fixture: ComponentFixture<ErtigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErtigaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErtigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
