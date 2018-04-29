import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookingDialogComponent } from './event-booking-dialog.component';

describe('EventBookingDialogComponent', () => {
  let component: EventBookingDialogComponent;
  let fixture: ComponentFixture<EventBookingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBookingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBookingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
