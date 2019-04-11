import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingDayViewComponent } from './scheduling-day-view.component';

describe('SchedulingDayViewComponent', () => {
  let component: SchedulingDayViewComponent;
  let fixture: ComponentFixture<SchedulingDayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingDayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingDayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
