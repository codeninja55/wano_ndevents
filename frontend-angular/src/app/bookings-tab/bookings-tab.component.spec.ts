import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsTabComponent } from './bookings-tab.component';

describe('BookingsTabComponent', () => {
  let component: BookingsTabComponent;
  let fixture: ComponentFixture<BookingsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
