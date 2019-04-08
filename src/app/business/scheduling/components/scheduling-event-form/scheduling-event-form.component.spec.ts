import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingEventFormComponent } from './scheduling-event-form.component';

describe('SchedulingEventFormComponent', () => {
  let component: SchedulingEventFormComponent;
  let fixture: ComponentFixture<SchedulingEventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingEventFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
