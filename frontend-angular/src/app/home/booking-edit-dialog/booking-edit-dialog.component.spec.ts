import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingEditDialogComponent } from './booking-edit-dialog.component';

describe('BookingEditDialogComponent', () => {
  let component: BookingEditDialogComponent;
  let fixture: ComponentFixture<BookingEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
