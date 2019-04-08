import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CalendarEvent } from 'calendar-utils';

@Component({
  selector: 'app-scheduling-event-form',
  templateUrl: './scheduling-event-form.component.html',
  styleUrls: ['./scheduling-event-form.component.scss']
})
export class SchedulingEventFormComponent implements OnInit {

  day: Date;
  events: CalendarEvent[];

  constructor(
    @Inject(MAT_DIALOG_DATA) data:  any,
  ) {
    this.day = data.date;
  }

  ngOnInit() {
  }

}
