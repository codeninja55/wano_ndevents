import {AbstractControl} from '@angular/forms';
import * as moment from 'moment';

export class EventDateValidator {
  static validate(firstControlName, secondControlName) {
    return (control: AbstractControl) => {
      let firstControlValue = control.get(firstControlName).value; // to get value in input tag
      let secondControlValue = control.get(secondControlName).value;

      if (moment(firstControlValue).isAfter(secondControlValue)) {
        control.get(firstControlName).setErrors({bad_date: true});
      } else {
        return null
      }
    };
  }
}
