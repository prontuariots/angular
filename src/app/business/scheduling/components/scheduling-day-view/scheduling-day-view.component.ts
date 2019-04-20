import { MatDialog } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';

import { RegistrationService } from 'src/app/business/registration/registration.service';

import { Unit } from 'src/app/business/registration/unit/models/unit.model';
import { Customer } from './../../../registration/customer/models/customer.model';
import { Doctor } from 'src/app/business/registration/doctor/models/doctor.model';

import { SchedulingHourEvent } from '../../models/scheduling-hour-event.model';

import { SchedulingEventFormComponent } from '../scheduling-event-form/scheduling-event-form.component';
import { DoctorFormComponent } from '../../../registration/doctor/components/doctor-form/doctor-form.component';
import { UnitFormComponent } from 'src/app/business/registration/unit/components/unit-form/unit-form.component';
import { CustomerFormComponent } from 'src/app/business/registration/customer/components/customer-form/customer-form.component';

@Component({
  selector: 'app-scheduling-day-view',
  templateUrl: './scheduling-day-view.component.html',
  styleUrls: ['./scheduling-day-view.component.scss']
})
export class SchedulingDayViewComponent implements OnInit {

  customers: Customer[];
  doctors: Doctor[];
  units: Unit[];

  @Input() hoursEvents: SchedulingHourEvent[];

  constructor(
    private dialog: MatDialog,
    private registrationService: RegistrationService
  ) {
    this.units = [];
    this.doctors = [];
    this.customers = [];
  }

  ngOnInit() {
    this.registrationService.getCustomers().subscribe(data => {
      this.customers = data;
    });

    this.registrationService.getDoctors().subscribe(data => {
      this.doctors = data;
    });
    
    this.registrationService.getUnits().subscribe(data => {
      this.units = data;
    });
  }

  addHourEvent(hourEvent: SchedulingHourEvent) {
    const dialogRef = this.dialog.open(SchedulingEventFormComponent, {
      width: "70%",
      data: hourEvent
    });

    dialogRef.componentInstance.units = this.units;
    dialogRef.componentInstance.doctors = this.doctors;
    dialogRef.componentInstance.customers = this.customers;

    const addDoctor = dialogRef.componentInstance.addDoctor.subscribe(() => {
      this.addDoctor();
    });

    const addUnit = dialogRef.componentInstance.addUnit.subscribe(() => {
      this.addUnit();
    });

    const addCustomer = dialogRef.componentInstance.addCustomer.subscribe(() => {
      this.addCustomer();
    });

    dialogRef.afterClosed().subscribe(resource => {
      if (resource.isCreate && resource.success) {
        let hourEvent: SchedulingHourEvent = resource.hourEvent;

        this.hoursEvents.forEach((item: SchedulingHourEvent) => {
          if (item.date == hourEvent.date)
            item.event = hourEvent.event
        });

      } else if (!resource.isCreate && resource.success) {
        // this.editSuccess(result.result);
      }
    });
  }





 private addCustomer(): void {
    const dialogRef = this.dialog.open(CustomerFormComponent, {
      width: "70%",
    });

    dialogRef.componentInstance.cancel.subscribe(() => {
      dialogRef.close();
    });

    dialogRef.componentInstance.submit.subscribe((date: any) => {
      this.customers.push(date.result);
      this.registrationService.saveCustomer(date.result);

      dialogRef.close();
    });
  }

 private addDoctor(): void {
    const dialogRef = this.dialog.open(DoctorFormComponent, {
      width: "70%",
    });

    dialogRef.componentInstance.cancel.subscribe(() => {
      dialogRef.close();
    });

    dialogRef.componentInstance.submit.subscribe((date: any) => {
      this.doctors.push(date.result);
      this.registrationService.saveDoctor(date.result);

      dialogRef.close();
    });
  }

 private addUnit(): void {
    const dialogRef = this.dialog.open(UnitFormComponent, {
      width: "70%",
    });

    dialogRef.componentInstance.cancel.subscribe(() => {
      dialogRef.close();
    });

    dialogRef.componentInstance.submit.subscribe((date: any) => {
      this.units.push(date.result);
      this.registrationService.saveUnit(date.result);

      dialogRef.close();
    });
  }
}
