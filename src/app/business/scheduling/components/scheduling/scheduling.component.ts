import { Component, OnInit } from '@angular/core';

import { SchedulingService } from '../../scheduling.service';

import { Scheduling } from '../../models/scheduling.model';
import { DateSchedules } from '../../models/date-schedules.model';


import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, addMinutes } from 'date-fns';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})
export class SchedulingComponent implements OnInit {

  schedules: Scheduling[];
  datesSchedules: DateSchedules[];

  dayStartHour: Date;
  dayEndHour: Date;
  hourSegments: number;


  activeDayIsOpen: boolean;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];

  constructor(
    private schedulingService: SchedulingService,
  ) {
    this.dayStartHour = new Date();
    this.dayStartHour.setHours(8, 0, 0);

    this.dayEndHour = new Date();
    this.dayEndHour.setHours(20, 0, 0);

    this.hourSegments = 15;

    this.datesSchedules = []

    this.activeDayIsOpen = false;
  }

  ngOnInit() {
    this.schedulingService.getSchedules().subscribe(data => {
      this.schedules = data;
      this.setDatesSchedules();
    });
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.viewDate = date;
    this.setDatesSchedules();

    this.view = this.CalendarView.Day;
  }

  handleEvent(action: string, event: CalendarEvent): void {
    // this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }

  onViewDateChange(): void {
    this.setDatesSchedules();
  }





  private setDatesSchedules(): void {
    let start: Date, arr = [];

    start = this.viewDate;
    start.setHours(8, 0, 0);

    for (let index = 0; index < ((20 - 8) * (60 / this.hourSegments)); index++) {
      arr.push({
        date: start,
        schedules: this.getSchedulesToDate(start)
      });

      start = addMinutes(start, this.hourSegments);
    }

    this.datesSchedules = arr;
  }
  private getSchedulesToDate(date): Scheduling[] {
    const filter = this.schedules.filter(item => {
      let iDate = new Date(item.date);

      return iDate.toString() == date.toString();
    });

    return filter;
  }
}
