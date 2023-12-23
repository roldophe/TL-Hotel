import { ConfigService } from './../services/config.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  constructor(
    private configService: ConfigService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl({value:'2',disabled:true}), //new FormControl('1') => Can change value
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),

      guestCount: [''],
    });
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  addBooking() {
    console.log('addBooking', this.bookingForm.getRawValue()); // TODO: check all fields with valid and disabled values value
  }
}
