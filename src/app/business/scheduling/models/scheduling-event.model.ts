export class SchedulingEvent {
    patient: string;
    phone: string;
    doctor: string;
    place: string;
    status: string;

    constructor() {
        this.patient = undefined;
        this.phone = undefined;
        this.doctor = undefined;
        this.place = undefined;
        this.status = undefined;
    }
}