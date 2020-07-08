import { AbstractControl, ValidationErrors } from '@angular/forms';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';

export class CustomValidation {
  static unique(control: AbstractControl): ValidationErrors | null {
    return control.value === 'kold' ? { unique: true } : null;
  }
  static asyncUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | null {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        control.value === 'kold'
          ? resolve({ asyncUnique: true })
          : resolve(null);
      }, 5000);
    });
  }
}
