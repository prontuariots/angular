import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-scheduling-header',
  templateUrl: './scheduling-header.component.html',
  styleUrls: ['./scheduling-header.component.scss']
})
export class SchedulingHeaderComponent implements OnInit {

  @Input() view: string;
  @Input() viewDate: Date;
  @Input() locale: string = 'pt';
  
  @Output() viewChange: EventEmitter<string> = new EventEmitter();
  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
