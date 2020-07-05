import { Component} from '@angular/core';
import { IUser } from "./../../interfaces/user";``
import {OnInit } from "@angular/core";
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit  {
  users:Array<IUser>;
  constructor(private UserService:UserService){};

  ngOnInit(){
this.UserService.getUsersByRest().subscribe(
  users =>this.users=users
)
  }
}
