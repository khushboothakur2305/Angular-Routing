import { Component} from '@angular/core';
import { IUser } from "./../../interfaces/user";``
import {OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
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
 // this.users=this.UserService.getUsers();
  // this.ActivatedRoute.data.forEach(data =>
  //   this.users=data.users);
this.UserService.getUsersByRest().subscribe(
  users =>this.users=users
)
  }
}
