import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { Booking } from '../../types/booking.model';

@Injectable({
  providedIn: 'root'
})
export class MailingService {
  private readonly SERVICE_ID = 'service_ze2r1vp';
  private readonly TEMPLATE_ID = 'template_ym7vfaw';
  private readonly PUBLIC_KEY = 'Lnl4U_s5mibknzcBQ';
  private readonly TO_EMAIL = 'hampus.nilsson222@hotmail.se';

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
        .then((_) => {
          resolve();
        }, (error) => {
          reject(error);
        });
    });
  }
}
