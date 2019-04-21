import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UUID } from 'angular2-uuid';
import { of, Observable } from 'rxjs';

import { SessionService } from './../../core/session/services/session.service';

import { Scheduling } from './models/scheduling.model';

@Injectable()
export class SchedulingService {

    constructor(
        protected client: HttpClient,
        private session: SessionService
    ) {

    }

    getSchedules(): Observable<Scheduling[]> {
        return of(this.session.getSchedules())
    }

    removeScheduler(scheduling: Scheduling): void {
        this.session.removeScheduling(scheduling);
    }

    saveScheduler(scheduling: Scheduling): void {
        if (!scheduling.id)
            scheduling.id = UUID.UUID();
        else
            this.removeScheduler(scheduling);

        this.session.setScheduling(scheduling);
    }
}
