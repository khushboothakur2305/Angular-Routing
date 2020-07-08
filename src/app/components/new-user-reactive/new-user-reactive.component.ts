import { Component, OnInit } from '@angular/core';
import { FormControl,Validators,FormArray,FormGroup } from "@angular/forms";
@Component({
  selector: 'app-new-user-reactive',
  templateUrl: './new-user-reactive.component.html',
  styleUrls: ['./new-user-reactive.component.scss']
})
export class NewUserReactiveComponent implements OnInit {
userform:FormGroup;
  constructor() { }
  ngOnInit(){
    this.userform=new FormGroup({
      name:new FormControl(''),
      username:new FormControl(''),
      email:new FormControl(''),
      phone:new FormControl(''),
      website:new FormControl(''),
      address:new FormGroup({
      street:new FormControl(''),
      suite:new FormControl(''),
      city:new FormControl(''),
      zipcode:new FormControl(''),
      geo:new FormGroup({
      lat:new FormControl(''),
     lng:new FormControl(''),
    })
  }),
  company:new FormGroup({
    cmpname:new FormControl(''),
     catchphrase:new FormControl(''),
     bs:new FormControl(''),
    })
  });

}

submit(){}
}
