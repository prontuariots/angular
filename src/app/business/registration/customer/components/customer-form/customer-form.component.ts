import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<string> = new EventEmitter();

  model: Customer;

  title: string;
  isCreate: boolean;
  formGroup: FormGroup;
  formFields: FormlyFieldConfig[];

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Customer,
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
    let cpf: any, name: any;

    cpf = this.cpfFiled();
    name = this.nameField();

    this.formFields = [{
      fieldGroupClassName: 'row',
      fieldGroup: [
        cpf,
        name
      ]
    }
    ];
  }
  private cpfFiled(): any {
    return {
      key: 'cpf',
      type: "input",
      className: 'col-3',
      templateOptions: {
        type: "text",
        label: "CPF",
        placeholder: "CPF do Cliente",
        required: true,
        maxLength: 20,
      },
      validation: {
        messages: {
          required: "Campo obrigatório",
          maxLength: 'Máximo de 20 caracteres'
        }
      }
    }
  }
  private nameField(): any {
    return {
      key: 'name',
      type: "input",
      className: 'col-10',
      templateOptions: {
        type: "text",
        label: "Nome",
        placeholder: "Nome do Cliente",
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
    this.title = 'Adicionar Cliente';

    if (!this.isCreate) {
      this.title = 'Editar Cliente';
    }
  }
}
