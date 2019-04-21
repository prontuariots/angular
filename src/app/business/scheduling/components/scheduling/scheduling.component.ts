import { SchedulingService } from '../../scheduling.service';
import { Scheduling } from '../../models/scheduling.model';
import { DateSchedules } from '../../models/date-schedules.model';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { Subject } from 'rxjs';

import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, addMinutes } from 'date-fns';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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


  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  constructor(
    private modal: NgbModal,
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

    this.setView(this.CalendarView.Day);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    // this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }



  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }





  private setDatesSchedules(): void {
    let start: Date, arr = [];

    start = new Date();
    start.setHours(8, 0, 0);

    for (let index = 0; index < ((20 - 8) * (60 / this.hourSegments)); index++) {
      this.datesSchedules.push({
        date: start,
        schedules: this.getSchedulesToDate(start)
      });

      start = addMinutes(start, this.hourSegments);
    }
    console.log(this.schedules);
    console.log(this.datesSchedules);
  }
  private getSchedulesToDate(date): Scheduling[] {
    const filter = this.schedules.filter(item => {
      let iDate = new Date(item.date);

      return iDate.toString() == date.toString();
    });

    // if (!filter.length) {
    //   let scheduling = new Scheduling();
    //   scheduling.date = date;

    //   filter.push(scheduling);
    // }

    return filter;
  }
}
