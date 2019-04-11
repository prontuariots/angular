import { SchedulingEvent } from './scheduling-event.model';

export class SchedulingHourEvent {
    date: Date;
    event: SchedulingEvent;

    constructor() {
        this.date = undefined;
        this.event = undefined;
    }
}