import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { Doctor } from '../../models/doctor.model';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {

  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<string> = new EventEmitter();

  model: Doctor;

  title: string;
  isCreate: boolean;
  formGroup: FormGroup;
  formFields: FormlyFieldConfig[];

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Doctor,
  ) {
    this.isCreate = !data; // || !data.id.length;

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
    let crm: any, name: any;

    crm = this.crmFiled();
    name = this.nameField();

    this.formFields = [{
      fieldGroupClassName: 'row',
      fieldGroup: [
        crm,
        name
      ]
    }
    ];
  }
  private crmFiled(): any {
    return {
      key: 'crm',
      type: "input",
      className: 'col-3',
      templateOptions: {
        type: "text",
        label: "CRM",
        placeholder: "CRM do Médico",
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
        placeholder: "Nome do Médico",
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
    this.title = 'Adicionar Médico';

    if (!this.isCreate) {
      this.title = 'Editar Médico';
    }
  }
}
