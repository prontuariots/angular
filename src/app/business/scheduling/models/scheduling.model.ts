import { Unit } from './../../registration/unit/models/unit.model';
import { Doctor } from '../../registration/doctor/models/doctor.model';
import { Customer } from './../../registration/customer/models/customer.model';

export class Scheduling {
    id: string;
    date: Date;
    status: string;

    customer: Customer;
    customerId: string;
    
    doctor: Doctor;
    doctorId: string;
    
    unit: Unit;
    unitId: string;

    constructor() {
        this.id = undefined;
        this.unitId = undefined;
        this.doctorId = undefined;
        this.customerId = undefined;

        this.date = undefined;
        this.status = undefined;

        this.unit = undefined;
        this.doctor = undefined;
        this.customer = undefined;
    }
}