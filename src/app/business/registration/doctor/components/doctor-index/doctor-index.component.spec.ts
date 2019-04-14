import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorIndexComponent } from './doctor-index.component';

describe('DoctorIndexComponent', () => {
  let component: DoctorIndexComponent;
  let fixture: ComponentFixture<DoctorIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
