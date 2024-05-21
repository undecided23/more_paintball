import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Booking } from '../../../types/booking.model'
import { BookerType } from '../../../types/booking.model'
import { MailingService } from '../../services/mailing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.scss'
})
export class BookingFormComponent {
  errorMessage = '';

  bookerTypes = [
    { value: BookerType.PRIVATE, viewValue: 'Privatperson' },
    { value: BookerType.COMPANY, viewValue: 'Företag' }
  ];

  bookingForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl(0, [Validators.required]),
    date: new FormControl(new Date(), Validators.required),
    people: new FormControl(0, Validators.required),
    message: new FormControl('', Validators.required),
    booker_type: new FormControl(BookerType.PRIVATE, Validators.required)
  });

  constructor (private mailingService: MailingService) {}

  sendBooking(booking: Booking) {
    this.bookingForm.value
    this.mailingService.sendBookingRequest(booking)
      .then(() => {
        console.log('Booking request sent');
        
      })
      .catch((error) => {
        this.errorMessage = error;
      });
  }

  handleBooking() {
    if (this.bookingForm.valid) {
      const data: Booking = {
        booker_name: this.bookingForm.value.name!,
        booker_email: this.bookingForm.value.email!,
        booker_phone: this.bookingForm.value.phone!,
        booking_date: this.bookingForm.value.date!,
        number_of_people: this.bookingForm.value.people!,
        booker_message: this.bookingForm.value.message!,
        booker_type: this.bookingForm.value.booker_type!
      }
      this.sendBooking(data)
    } else {
      this.errorMessage = 'Formuläret är inte korrekt ifyllt';
    }
  }
}
