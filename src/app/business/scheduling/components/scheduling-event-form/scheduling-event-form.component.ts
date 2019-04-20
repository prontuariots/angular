import { Component, OnInit, Inject, EventEmitter, Output, Input } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { SchedulingComponent } from '../scheduling/scheduling.component';

import { SchedulingHourEvent } from '../../models/scheduling-hour-event.model';

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

  hourEvent: SchedulingHourEvent;

  @Output() addCustomer: EventEmitter<string> = new EventEmitter();
  @Output() addDoctor: EventEmitter<string> = new EventEmitter();
  @Output() addUnit: EventEmitter<string> = new EventEmitter();

  constructor(
    @Inject(MAT_DIALOG_DATA) hourEvent: SchedulingHourEvent,
    public dialogRef: MatDialogRef<SchedulingComponent>,
  ) {
    this.units = [];
    this.doctors = [];
    this.customers = [];

    this.hourEvent = Object.assign({}, hourEvent);
  }

  ngOnInit() {
  }

  addEvent(): void {
    let date = this.hourEvent.date;
    let value = `${date.getHours()}:${date.getMinutes()}`

    this.hourEvent.event = {
      patient: `patient ${value}`,
      phone: `paphonetient`,
      doctor: `doctor ${value}`,
      place: `place`,
      status: `status`
    }

    this.dialogRef.close({ isCreate: true, success: true, hourEvent: this.hourEvent });
  }

  cancelEvent(): void {
    this.hourEvent.event = {
      patient: ``,
      phone: ``,
      doctor: ``,
      place: ``,
      status: ``
    }

    this.dialogRef.close({ isCreate: true, success: true, hourEvent: this.hourEvent });
  }
}
