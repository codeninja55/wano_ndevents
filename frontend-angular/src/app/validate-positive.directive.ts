import {AbstractControl} from '@angular/forms';

export class PositiveNumberValidator {

  static validate(controlName) {
    return (control: AbstractControl) => {
      let firstControlValue = control.get(controlName).value; // to get value in input tag
      if (firstControlValue < 0) {
        control.get(controlName).setErrors({negative: true});
      } else {
        return null
      }
    };
  }
}
