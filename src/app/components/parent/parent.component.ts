import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  DateToday: string;
  users: IUser[];
  filterIdType:String;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.DateToday = new Date().toDateString();
    this.users = this.userService.getUsers();
  }
  addUser() {
    this.userService.addUser({
      id: this.users.length+2,
      name: 'khushboo thakur',
      username: 'khushboo',
      email: 'khushboo@2305@gmail.com',
      phone: '1234578958',
      website: 'artlover.com',
    });
  }
}
