import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyAutocompleteTypeComponent } from './formly-autocomplete-type.component';

describe('FormlyAutocompleteTypeComponent', () => {
  let component: FormlyAutocompleteTypeComponent;
  let fixture: ComponentFixture<FormlyAutocompleteTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlyAutocompleteTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyAutocompleteTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
