import { MatInput } from '@angular/material';
import { FieldType } from '@ngx-formly/material';
import { Component, ViewChild, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-formly-autocomplete-type',
  templateUrl: './formly-autocomplete-type.component.html',
  styleUrls: ['./formly-autocomplete-type.component.scss']
})
export class FormlyAutocompleteTypeComponent extends FieldType implements OnInit {
  @ViewChild(MatInput) formFieldControl: MatInput;

  value: string;
  textKey: string;
  valueKey: string;
  filter: Observable<any>;

  ngOnInit() {
    super.ngOnInit();

    this.textKey = this.to.autocomplete.textKey;
    this.valueKey = this.to.autocomplete.valueKey;

    this.filter = of(this.to.autocomplete.options);
  }

  refreshFilter(event: any): void {
    const term = event.target.value;

    if (!term.length)
      this.value = null;

    const filter = this.to.autocomplete.options.filter(item => {
      return ~item[this.textKey].indexOf(term);
    });

    this.filter = of(filter);
  }

  public valueMapper = (key) => {
    if(!!key && !!key.length) {
      let selection = this.to.autocomplete.options.find(e => e[this.valueKey] === key);

      if (selection)
        return selection[this.textKey];
    }
  };
}
