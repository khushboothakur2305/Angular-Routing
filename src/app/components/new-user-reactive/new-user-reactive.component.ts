import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { CustomValidation } from 'src/app/classes/custom.validation.ts';
@Component({
  selector: 'app-new-user-reactive',
  templateUrl: './new-user-reactive.component.html',
  styleUrls: ['./new-user-reactive.component.scss'],
})
export class NewUserReactiveComponent implements OnInit {
  userform: FormGroup;
  get name() {
    return this.userform.get('name');
  }
  get username() {
    return this.userform.get('username');
  }
  constructor() {}
  ngOnInit() {
    this.userform = new FormGroup({
      name: new FormControl('Khushboo Thakur', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern('John Doe'),
      ]),
      username: new FormControl('ArtLover', null, CustomValidation.asyncUnique),
      email: new FormControl('khushboothakur2305@gmail.com'),
      phone: new FormControl('9876543456'),
      website: new FormControl('www.artlover.com'),
      address: new FormGroup({
        street: new FormControl('anand nagar'),
        suite: new FormControl('navlakha'),
        city: new FormControl('indore'),
        zipcode: new FormControl('452001'),
        geo: new FormGroup({
          lat: new FormControl('736746'),
          lng: new FormControl('97986875'),
        }),
      }),
      company: new FormGroup({
        cmpname: new FormControl('Art Lover'),
        catchphrase: new FormControl('Feel The Art'),
        bs: new FormControl('Bring your creativity out and feel the art'),
      }),
      hobbies: new FormArray([]),
    });
  }
  addHobby() {
    (<FormArray>this.userform.get('hobbies')).push(new FormControl(''));
  }
  deleteHobby(index) {
    (<FormArray>this.userform.get('hobbies')).removeAt(index);
  }

  submit() {}
  resetform() {
    this.userform.reset();
  }
}
