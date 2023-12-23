import { ConfigService } from './../services/config.service';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
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
  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }
  constructor(
    private configService: ConfigService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: '2', disabled: true }), //new FormControl('1') => Can change value
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
      guests: this.fb.array([
        this.fb.group({
          guestName: [''],
          age: new FormControl(''),
        }),
      ]),
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

  addGuest() {
    this.guests.push(
      this.fb.group({
        guestName: [''],
        age: new FormControl(''),
      }),
    );
  }
  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }
  deletePassport() {
    if(this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
}
