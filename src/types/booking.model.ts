export interface Booking {
    booker_name: string;
    booker_email: string;
    booker_phone: number;
    booking_date: Date;
    number_of_people: number;
    booker_message: string | null;
    booker_type: BookerType;
}

export enum BookerType {
    COMPANY = 'Företag',
    PRIVATE = 'Privatperson'
}