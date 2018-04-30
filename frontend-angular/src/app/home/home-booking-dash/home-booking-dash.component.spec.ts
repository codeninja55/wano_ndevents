import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBookingDashComponent } from './home-booking-dash.component';

describe('HomeBookingDashComponent', () => {
  let component: HomeBookingDashComponent;
  let fixture: ComponentFixture<HomeBookingDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBookingDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBookingDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
