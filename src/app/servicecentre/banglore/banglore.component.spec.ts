import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangloreComponent } from './banglore.component';

describe('BangloreComponent', () => {
  let component: BangloreComponent;
  let fixture: ComponentFixture<BangloreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BangloreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BangloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
