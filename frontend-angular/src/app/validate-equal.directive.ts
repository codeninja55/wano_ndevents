import {AbstractControl} from '@angular/forms';

export class PasswordMatchValidators {

  /**
   * Match two controls if they are the same
   * @param firstControlName
   * @param secondControlName
   * @returns {(AC: AbstractControl) => any}
   * @constructor
   */
  static validate(firstControlName, secondControlName) {
    return (ac: AbstractControl) => {
      let firstControlValue = ac.get(firstControlName).value; // to get value in input tag
      let secondControlValue = ac.get(secondControlName).value; // to get value in input tag
      if (firstControlValue != secondControlValue) {
        ac.get(secondControlName).setErrors({mismatch: true});
      } else {
        return null
      }
    };
  }
}
