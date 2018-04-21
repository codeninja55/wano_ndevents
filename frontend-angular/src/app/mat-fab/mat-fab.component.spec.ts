import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFabComponent } from './mat-fab.component';

describe('MatFabComponent', () => {
  let component: MatFabComponent;
  let fixture: ComponentFixture<MatFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
