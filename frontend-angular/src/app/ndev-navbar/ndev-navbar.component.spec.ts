import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdevNavbarComponent } from './ndev-navbar.component';

describe('NdevNavbarComponent', () => {
  let component: NdevNavbarComponent;
  let fixture: ComponentFixture<NdevNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdevNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdevNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
