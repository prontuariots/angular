import { MatDialog } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';

import { SchedulingHourEvent } from '../../models/scheduling-hour-event.model';

import { SchedulingEventFormComponent } from '../scheduling-event-form/scheduling-event-form.component';

@Component({
  selector: 'app-scheduling-day-view',
  templateUrl: './scheduling-day-view.component.html',
  styleUrls: ['./scheduling-day-view.component.scss']
})
export class SchedulingDayViewComponent implements OnInit {

  @Input() hoursEvents: SchedulingHourEvent[];

  constructor(
    private dialog: MatDialog,
  ) {

  }

  ngOnInit() {
  }

  addHourEvent(hourEvent: SchedulingHourEvent) {
    const dialogRef = this.dialog.open(SchedulingEventFormComponent, {
      width: "500px",
      data: hourEvent
    });

    dialogRef.afterClosed().subscribe(resource => {
      if (resource.isCreate && resource.success) {
        let hourEvent:SchedulingHourEvent = resource.hourEvent;

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
