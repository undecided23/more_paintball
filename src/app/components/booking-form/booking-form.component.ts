import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

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
  userEmail = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('');
  errorMessage = '';

  constructor () {

  }

  updateName() {
    this.name.setValue("hampus")
  }

  controlUserEmail(): void {
    if (this.userEmail.hasError('required')) {
      this.errorMessage = 'You must enter an email address to continue booking';
    } else if (this.userEmail.hasError('email')) {
      this.errorMessage = 'Please enter a valid email address';
    } else {
      this.errorMessage = '';
    }
  }
}
