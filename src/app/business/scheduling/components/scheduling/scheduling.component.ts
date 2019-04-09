import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { Subject } from 'rxjs';

import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
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
    private dialog: MatDialog,
    private modal: NgbModal
  ) {
    this.activeDayIsOpen = false;
  }

  ngOnInit() {

  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.viewDate = date;

    this.setView(this.CalendarView.Day);
  }

  hourSegmentClicked(day: Date) {
    const dialogRef = this.dialog.open(SchedulingEventFormComponent, {
      width: "500px",
      data: day
    });

    dialogRef.afterClosed().subscribe(resource => {
      if (resource.isCreate && resource.success) {
        this.events = [
          ...this.events,
          resource.event
        ];
      } else if (!resource.isCreate && resource.success) {
        // this.editSuccess(result.result);
      }
    });
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
