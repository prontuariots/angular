import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingLayoutComponent } from './scheduling-layout.component';

describe('SchedulingLayoutComponent', () => {
  let component: SchedulingLayoutComponent;
  let fixture: ComponentFixture<SchedulingLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
