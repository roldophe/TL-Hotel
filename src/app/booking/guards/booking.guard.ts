import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { BookingComponent } from '../booking.component';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable()
export class BookingGuard implements CanDeactivate<BookingComponent> {
  constructor(private snackBar: MatSnackBar) {}
  canDeactivate(
    component: BookingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean> | boolean | UrlTree{
    // Add your custom validation logic here
    // For example, check if the component's form has unsaved changes
    if (component.bookingForm.pristine) {
      console.log("Checking:", component.bookingForm.pristine)
      // return confirm('Are you sure you want to leave? Your changes will be lost.');
      return component.bookingForm.pristine;
    }
    else{
      this.snackBar.open('Are you sure you want to leave? Your changes will be lost.',"Please enter");
      return false;
    }
  }
}