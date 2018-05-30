import {AbstractControl} from '@angular/forms';

export class ExceedCapacityValidator {

  static validate(controlName, capacity) {
    return (control: AbstractControl) => {
      let firstControlValue = control.get(controlName).value; // to get value in input tag
      if (firstControlValue < capacity) {
        control.get(controlName).setErrors({exceed_capacity: true});
      } else {
        return null
      }
    };
  }
}
