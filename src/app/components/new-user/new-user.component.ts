import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
genders:string[];
communicationmode:string[];
  constructor() { }

  ngOnInit(): void {
    this.communicationmode=['Email','Phone'];
    this.genders=['Male','Female','Other']
  }
  submit(userForm){
    console.log('Form Submitted',userForm);

  }
}
