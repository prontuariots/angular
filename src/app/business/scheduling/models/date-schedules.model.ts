import { Scheduling } from './scheduling.model';

export class DateSchedules {
    date: Date;
    schedules: Scheduling[];

    constructor() {
        this.date = undefined;
        this.schedules = undefined;
    }
}