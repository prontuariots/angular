import { MatDialog } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';

import { SchedulingHourEvent } from '../../models/scheduling-hour-event.model';

import { SchedulingEventFormComponent } from '../scheduling-event-form/scheduling-event-form.component';
import { DoctorFormComponent } from '../../../registration/doctor/components/doctor-form/doctor-form.component';
import { Doctor } from 'src/app/business/registration/doctor/models/doctor.model';
import { RegistrationService } from 'src/app/business/registration/registration.service';

@Component({
  selector: 'app-scheduling-day-view',
  templateUrl: './scheduling-day-view.component.html',
  styleUrls: ['./scheduling-day-view.component.scss']
})
export class SchedulingDayViewComponent implements OnInit {

  doctors: Doctor[];

  @Input() hoursEvents: SchedulingHourEvent[];

  constructor(
    private dialog: MatDialog,
    private registrationService: RegistrationService
  ) {
    this.doctors = [];
  }

  ngOnInit() {
    this.registrationService.getDoctors().subscribe(data => {
      this.doctors = data;
    });
  }

  addDoctor(): void {
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

  addHourEvent(hourEvent: SchedulingHourEvent) {
    const dialogRef = this.dialog.open(SchedulingEventFormComponent, {
      width: "70%",
      data: hourEvent
    });

    dialogRef.componentInstance.doctors = this.doctors;

    const sub = dialogRef.componentInstance.addDoctor.subscribe(() => {
      this.addDoctor();
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

}
