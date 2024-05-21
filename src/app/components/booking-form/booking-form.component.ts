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
    MatButtonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.scss'
})
export class BookingFormComponent {
  errorMessage = '';

  bookingForm = new FormGroup({
    booker_name : new FormControl('', Validators.required),
    booker_email: new FormControl('', Validators.required),
    booker_phone: new FormControl('', Validators.required),
    booking_date: new FormControl('', Validators.required),
    number_of_people: new FormControl('', Validators.required),
    booker_message: new FormControl('', Validators.required),
    booker_type: new FormControl('', Validators.required)
  });

  constructor () {}

  sendBooking(booking: Booking) {
    
  }
}
