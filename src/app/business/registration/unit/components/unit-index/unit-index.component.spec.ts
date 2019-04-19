import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitIndexComponent } from './unit-index.component';

describe('UnitIndexComponent', () => {
  let component: UnitIndexComponent;
  let fixture: ComponentFixture<UnitIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
