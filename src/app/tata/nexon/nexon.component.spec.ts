import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexonComponent } from './nexon.component';

describe('NexonComponent', () => {
  let component: NexonComponent;
  let fixture: ComponentFixture<NexonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NexonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NexonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
