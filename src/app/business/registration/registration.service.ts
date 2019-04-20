import { Customer } from './customer/models/customer.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, Observable } from 'rxjs';

import { SessionService } from './../../core/session/services/session.service';

import { Doctor } from './doctor/models/doctor.model';
import { Unit } from './unit/models/unit.model';

@Injectable()
export class RegistrationService {

    constructor(
        protected client: HttpClient,
        private session: SessionService
    ) {

    }

    getCustomers(): Observable<Customer[]> {
        return of(this.session.getCustomers())
    }
    getDoctors(): Observable<Doctor[]> {
        return of(this.session.getDoctors())
    }
    getUnits(): Observable<Unit[]> {
        return of(this.session.getUnits())
    }

    saveCustomer(customer: Customer): void {
        this.session.setCustomer(customer);
    }
    saveDoctor(doctor: Doctor): void {
        this.session.setDoctor(doctor);
    }
    saveUnit(unit: Unit): void {
        this.session.setUnit(unit);
    }
}
