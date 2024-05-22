import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { Booking } from '../../types/booking.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailingService {
  private readonly SERVICE_ID = environment.emailjs.serviceId;
  private readonly TEMPLATE_ID = environment.emailjs.templateId;
  private readonly PUBLIC_KEY = environment.emailjs.publicKey;
  private readonly TO_EMAIL = environment.emailjs.toEmail;

  constructor() {
  }

  /**
   * This method sends a booking request to the owner of the website.
   * If the request is successful, the promise will resolve, otherwise it will reject.
   * If the promise is rejected, the caller of the funciton must handle the error.
   */
  public async sendBookingRequest(booking: Booking): Promise<void> {
    const templateParams = {
      ...booking,
      to_email: this.TO_EMAIL
    };

    return new Promise((resolve, reject) => {
      emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams, {
        publicKey: this.PUBLIC_KEY
      })
        .then(() => {
          resolve();
        }, (error) => {
          reject(error);
        });
    });
  }
}
