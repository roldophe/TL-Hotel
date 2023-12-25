import { BookingService } from './booking.service';
import { ConfigService } from './../services/config.service';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidator } from './validators/custom-validator';

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
    private bookingService: BookingService,
  ) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group(
      {
        roomId: new FormControl(
          { value: '2', disabled: true },
          { validators: [Validators.required] },
        ),
        guestEmail: [
          '',
          { validators: [Validators.required, Validators.email] },
        ],
        checkinDate: [''],
        checkoutDate: [''],
        bookingStatus: [''],
        bookingAmount: [''],
        bookingDate: [''],
        mobileNumber: [''],
        guestName: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            CustomValidator.validateName,
            CustomValidator.ValidateSpecialChar('*'),
          ],
        ],
        address: this.fb.group({
          addressLine1: ['', { validators: [Validators.required] }],
          addressLine2: [''],
          city: [''],
          state: [''],
          country: ['', { validators: [Validators.required] }],
          zipCode: [''],
        }),
        guests: this.fb.array([
          this.fb.group({
            guestName: ['', { validators: [Validators.required] }],
            age: ['', { validators: [Validators.required] }],
          }),
        ]),
      },
      { updateOn: 'blur', validators: [CustomValidator.validateDate] },
    );

    ///this.getBookingData();

    this.bookingForm.valueChanges.subscribe((data) => {
      console.log(data);
      this.bookingService.bookRoom(data).subscribe((data) => {});
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
    this.bookingForm.reset({
      roomId: new FormControl({ value: '2', disabled: true }), //new FormControl('1') => Can change value
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: this.fb.group({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      }),
      guests: this.fb.array([
        this.fb.group({
          guestName: '',
          age: '',
        }),
      ]),
    });
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
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }

  getBookingData() {
    this.bookingForm.setValue({
      roomId: new FormControl('2'),
      guestEmail: 'test@example.com',
      checkinDate: new Date('20-Feb-2023'),
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: this.fb.group({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      }),
      guests: this.fb.array([
        this.fb.group({
          guestName: '',
          age: '',
        }),
      ]),
    });
  }
}
