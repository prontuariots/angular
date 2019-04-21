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

    saveScheduler(Scheduling: Scheduling): void {
        if (!Scheduling.id)
            Scheduling.id = UUID.UUID();

        this.session.setScheduling(Scheduling);
    }
}
