import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { CalendarEvent } from 'calendar-utils';
import { startOfDay, endOfDay, addMinutes } from 'date-fns';
import { SchedulingComponent } from '../scheduling/scheduling.component';

@Component({
  selector: 'app-scheduling-event-form',
  templateUrl: './scheduling-event-form.component.html',
  styleUrls: ['./scheduling-event-form.component.scss']
})
export class SchedulingEventFormComponent implements OnInit {

  day: Date;
  events: CalendarEvent[];

  private colors: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    public dialogRef: MatDialogRef<SchedulingComponent>,
  ) {
    this.day = data;

    this.colors = {
      red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
      },
      blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
      },
      yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
      }
    };
  }

  ngOnInit() {
  }

  addEvent(): void {
    // let event = {
    //   title: `${this.day} à ${addMinutes(this.day, 15)}`,
    //   start: this.day,
    //   end: addMinutes(this.day, 15),
    //   color: this.colors.red,
    //   draggable: true,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true
    //   },
    //   actions: [
    //     {
    //       label: '<i class="fa fa-fw fa-pencil"></i>',
    //       onClick: ({ event }: { event: CalendarEvent }): void => {
    //         console.log('Edit event', event);
    //       }
    //     }
    //   ]
    // };

    let item:any = this.day;

    let day = item.date.getHours();
    let month = item.date.getMinutes();
    
    let value = `${day}:${month}`

    let event = {
      patient: `patient to ${value}`,
      phone: `paphonetient to ${value}`,
      doctor: `doctor to ${value}`,
      place: `place to ${value}`,
      status: `status to ${value}`
    }

    this.dialogRef.close({ isCreate: true, success: true, date: this.day, event: event });
  }
}
