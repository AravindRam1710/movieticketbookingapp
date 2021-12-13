import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickeBookingComponent } from './ticke-booking.component';

describe('TickeBookingComponent', () => {
  let component: TickeBookingComponent;
  let fixture: ComponentFixture<TickeBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickeBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TickeBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
