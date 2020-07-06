import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser, IAddress } from './../../interfaces/user';
import { UserService } from 'src/app/services/user/user.service';
import { Posts } from 'src/app/interfaces/posts';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: IUser;
  addr: IAddress;
  posts: any;
  show: boolean = false;
  show1: boolean = false;
  show2: boolean = false;
  company: string = 'show company Details';
  Address: string = 'show Address';
  showpost: string = 'show Posts';
  constructor(
    private activatedRoute: ActivatedRoute,
    private UserService: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.UserService.getUsersviaIdRest(+params.userid).subscribe(
        (user) => (this.user = user)
      );
    });
  }
  CreateUser() {
    this.user.id = null;
    this.UserService.CreateUser(this.user).subscribe(
      (user) => alert(`a new user was created with an id : ${user.id}`),
      (err) => alert(`got an error as ${err}`),
      () => alert('creation of user completed')
    );
  }
  UpdateUser() {
    this.user.name = 'khushboo thakur';
    this.user.email = 'khushboothakur2305@gmail.com';
    this.UserService.UpdateUser(this.user).subscribe(
      (user) => alert(`The user was updated`),
      (err) => alert(`got an error as ${err}`),
      () => alert('Updation of user completed')
    );
  }

  DeleteUser() {
    this.UserService.DeleteUser(this.user.id).subscribe(
      (user) => alert(`The user was Deleted`),
      (err) => alert(`got an error as ${err}`),
      () => alert('Deletion of user completed')
    );
  }
  getUserPosts() {
    if (this.show2 === true) {
      this.showpost = 'Show Posts';
      this.show2 = false;
    } else {
      this.show2 = true;
      this.showpost = 'Hide Posts';
    }
    this.posts = this.UserService.getUserPosts(this.user.id);
  }
  getAddress() {
    if (this.show === true) {
      this.Address = 'show Address';
      this.show = false;
    } else {
      this.show = true;
      this.Address = 'Hide Address';
    }
  }
  getCompany() {
    if (this.show1 === true) {
      this.company = 'show company Details';
      this.show1 = false;
    } else {
      this.show1 = true;
      this.company = 'Hide Company Details';
    }
  }
}
