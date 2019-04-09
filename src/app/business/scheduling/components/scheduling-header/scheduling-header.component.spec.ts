import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingHeaderComponent } from './scheduling-header.component';

describe('SchedulingHeaderComponent', () => {
  let component: SchedulingHeaderComponent;
  let fixture: ComponentFixture<SchedulingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
