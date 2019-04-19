import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { Unit } from '../../models/unit.model';

@Component({
  selector: 'app-unit-form',
  templateUrl: './unit-form.component.html',
  styleUrls: ['./unit-form.component.scss']
})
export class UnitFormComponent implements OnInit {
  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<string> = new EventEmitter();

  model: Unit;

  title: string;
  isCreate: boolean;
  formGroup: FormGroup;
  formFields: FormlyFieldConfig[];

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Unit,
  ) {
    this.isCreate = !data || !data.id.length;

    this.model = Object.assign({}, data);
    this.formFields = [];
    this.formGroup = new FormGroup({});
  }

  ngOnInit() {
    this.setFormFields();
    this.setTitle();
  }

  onCancel(): void {
    this.cancel.emit('cancel');
  }

  onSubmitCreate(): void {
    this.submit.emit({ isCreate: true, success: true, result: this.model });
  }

  onSubmitEdit(): void {
    this.submit.emit({ isCreate: false, success: true, result: this.model });
  }





  private setFormFields(): void {
    let name: any;

    name = this.nameField();

    this.formFields = [{
      fieldGroupClassName: 'row',
      fieldGroup: [
        name
      ]
    }
    ];
  }
  private nameField(): any {
    return {
      key: 'name',
      type: "input",
      className: 'col-10',
      templateOptions: {
        type: "text",
        label: "Nome",
        placeholder: "Nome da Unidade",
        required: true,
        maxLength: 150,
      },
      validation: {
        messages: {
          required: "Campo obrigatório",
          maxLength: 'Máximo de 150 caracteres'
        }
      }
    }
  }

  private setTitle() {
    this.title = 'Adicionar Unidade';

    if (!this.isCreate) {
      this.title = 'Editar Unidade';
    }
  }
}
