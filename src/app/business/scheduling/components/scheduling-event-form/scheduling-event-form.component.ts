import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject, EventEmitter, Output, Input } from '@angular/core';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { SchedulingService } from '../../scheduling.service';

import { SchedulingComponent } from '../scheduling/scheduling.component';

import { Scheduling } from '../../models/scheduling.model';
import { DateSchedules } from '../../models/date-schedules.model';

import { Unit } from 'src/app/business/registration/unit/models/unit.model';
import { Doctor } from 'src/app/business/registration/doctor/models/doctor.model';
import { Customer } from 'src/app/business/registration/customer/models/customer.model';

@Component({
  selector: 'app-scheduling-event-form',
  templateUrl: './scheduling-event-form.component.html',
  styleUrls: ['./scheduling-event-form.component.scss']
})
export class SchedulingEventFormComponent implements OnInit {

  @Input() customers: Customer[];
  @Input() doctors: Doctor[];
  @Input() units: Unit[];

  @Output() addCustomer: EventEmitter<string> = new EventEmitter();
  @Output() addDoctor: EventEmitter<string> = new EventEmitter();
  @Output() addUnit: EventEmitter<string> = new EventEmitter();

  model: Scheduling;
  title: string;
  isCreate: boolean;
  formGroup: FormGroup;
  formFields: FormlyFieldConfig[];

  constructor(
    private schedulingService: SchedulingService,
    @Inject(MAT_DIALOG_DATA) data: Scheduling,
    public dialogRef: MatDialogRef<SchedulingComponent>,
  ) {
    this.units = [];
    this.doctors = [];
    this.customers = [];

    this.isCreate = !data || !data.id != undefined;

    this.model = Object.assign({}, data);
    this.formFields = [];
    this.formGroup = new FormGroup({});
  }

  ngOnInit() {
    this.setFormFields();
    this.setTitle();
  }

  addEvent(): void {
    this.setRelationships();

    this.schedulingService.saveScheduler(this.model);
    this.dialogRef.close({ isCreate: true, success: true, scheduling: this.model });
  }





  private setFormFields(): void {
    let doctorAutocomplete: any, unitAutocomplete: any,
    customerAutocomplete;

    doctorAutocomplete = this.doctorAutocompleteField();
    unitAutocomplete = this.unitAutocompleteField();
    customerAutocomplete = this.customerAutocompleteField();

    this.formFields = [{
      fieldGroupClassName: 'row',
      fieldGroup: [
        doctorAutocomplete,
        unitAutocomplete,
        customerAutocomplete
      ]
    }
    ];
  }
  private doctorAutocompleteField(): any {
    return {
      key: 'doctorId',
      type: "autocomplete",
      className: 'col-10',
      templateOptions: {
        type: "text",
        label: "Médico",
        placeholder: "Escolha um médico",
        required: true,
        autocomplete: {
          textKey: 'name',
          valueKey: 'id',
          options: this.doctors,
        }
      },
      validation: {
        messages: {
          required: "Campo obrigatório"
        }
      }
    }
  }
  private unitAutocompleteField(): any {
    return {
      key: 'unitId',
      type: "autocomplete",
      className: 'col-10',
      templateOptions: {
        type: "text",
        label: "Unidade",
        placeholder: "Escolha uma unidade",
        required: true,
        autocomplete: {
          textKey: 'name',
          valueKey: 'id',
          options: this.units,
        }
      },
      validation: {
        messages: {
          required: "Campo obrigatório",
        }
      }
    }
  }
  private customerAutocompleteField(): any {
    return {
      key: 'customerId',
      type: "autocomplete",
      className: 'col-10',
      templateOptions: {
        type: "text",
        label: "Cliente",
        placeholder: "Escolha um cliente",
        required: true,
        autocomplete: {
          textKey: 'name',
          valueKey: 'id',
          options: this.customers,
        }
      },
      validation: {
        messages: {
          required: "Campo obrigatório",
        }
      }
    }
  }

  private setRelationships(): void {
    this.model.unit = this.units.find(item => item.id == this.model.unitId);
    this.model.doctor = this.doctors.find(item => item.id == this.model.doctorId);
    this.model.customer = this.customers.find(item => item.id == this.model.customerId);
  }

  private setTitle(): void {
    this.title = 'Adicionar Cliente';

    if (!this.isCreate) {
      this.title = 'Editar Cliente';
    }
  }
}
