import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SessionService } from './../../core/session/services/session.service';
import { Doctor } from './doctor/models/doctor.model';
import { of, Observable } from 'rxjs';

@Injectable()
export class RegistrationService {

    constructor(
        protected client: HttpClient,
        private session: SessionService
    ) {

    }

    getDoctors(): Observable<Doctor[]> {
        return of(this.session.getDoctors())
    }

    saveDoctor(doctor: Doctor): void {
        this.session.setDoctor(doctor);
    }
}
