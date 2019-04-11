import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { Subject } from 'rxjs';

import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, addMinutes } from 'date-fns';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';

import { SchedulingEventFormComponent } from '../scheduling-event-form/scheduling-event-form.component';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})
export class SchedulingComponent implements OnInit {

  dayStartHour: Date;
  dayEndHour: Date;
  hourSegments: number;

  hoursEvents: any[];

  activeDayIsOpen: boolean;


  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };


  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  constructor(
    private modal: NgbModal
  ) {
    this.dayStartHour = new Date();
    this.dayStartHour.setHours(8, 0, 0);

    this.dayEndHour = new Date();
    this.dayEndHour.setHours(20, 0, 0);

    this.hourSegments = 15;

    this.hoursEvents = [];
    ((): any => {
      let start: Date, arr = [];

      start = new Date();
      start.setHours(8, 0, 0);

      for (let index = 0; index < ((20 - 8) * (60 / this.hourSegments)); index++) {
        this.hoursEvents.push({
          date: start,
          event: { }
        });

        start = addMinutes(start, this.hourSegments);
      }
    })();

    this.activeDayIsOpen = false;
  }

  ngOnInit() {

  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.viewDate = date;

    this.setView(this.CalendarView.Day);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
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

}
