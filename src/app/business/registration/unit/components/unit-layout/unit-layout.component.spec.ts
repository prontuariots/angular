import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitLayoutComponent } from './unit-layout.component';

describe('UnitLayoutComponent', () => {
  let component: UnitLayoutComponent;
  let fixture: ComponentFixture<UnitLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
