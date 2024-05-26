import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BookerType, Booking } from '../../../types/booking.model';
import { MatTableModule } from '@angular/material/table';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MatDividerModule } from '@angular/material/divider';
import { MailingService } from '../../services/mailing.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatIconModule
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  bookingGroup = this.formBuilder.group({
    name: ['', Validators.required],
    numberOfPlayers: [4, Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    type: [BookerType.PRIVATE, Validators.required]
  });
  types = Object.values(BookerType);

  displayedColumns: string[] = ['name', 'numberOfPlayers', 'email', 'phone', 'type'];

  dataSource = [
    {
      name: this.bookingGroup.get('name')!.value,
      numberOfPlayers: this.bookingGroup.get('numberOfPlayers')!.value,
      email: this.bookingGroup.get('email')!.value,
      phone: this.bookingGroup.get('phone')!.value,
      type: this.bookingGroup.get('type')!.value
    }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private deviceDetector: DeviceDetectorService,
    private mailingService: MailingService,
    private snackBar: MatSnackBar

  ) {
  }

  setTableData() {
    this.dataSource = [
      {
        name: this.bookingGroup.get('name')!.value,
        numberOfPlayers: this.bookingGroup.get('numberOfPlayers')!.value,
        email: this.bookingGroup.get('email')!.value,
        phone: this.bookingGroup.get('phone')!.value,
        type: this.bookingGroup.get('type')!.value
      }
    ]
  }

  isOnMobile() {
    return this.deviceDetector.isMobile();
  }

  async sendBookingRequest() {
    this.mailingService.sendBookingRequest(this.bookingGroup.value as Booking)
      .then(() => {
        this.snackBar.open('Booking request sent successfully!', 'Close', {
          duration: 5000
        });
      })
      .catch(() => {
        this.snackBar.open('Failed to send booking request. Please try again later.', 'Close', {
          duration: 5000,
        });
      });
  }

}
