import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from './../../interfaces/user';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: IUser;
  posts:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private UserService: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.UserService.getUsersviaIdRest(+params.userid).subscribe(
        user=> this.user = user
      );
    });
  }
  CreateUser (){
    this.user.id=null;
    this.UserService.CreateUser(this.user).subscribe(
      user => alert(`a new user was created with an id : ${ user.id}`),
     err=> alert(`got an error as ${err}`),
     ()=>alert('creation of user completed')
    );
  }
UpdateUser(){
  this.user.name="khushboo thakur";
  this.user.email="khushboothakur2305@gmail.com";
  this.UserService.UpdateUser(this.user).subscribe(
    user => alert(`The user was updated`),
   err=> alert(`got an error as ${err}`),
   ()=>alert('Updation of user completed')
  );}

DeleteUser(){
  this.UserService.DeleteUser(this.user.id).subscribe(
    user => alert(`The user was Deleted`),
   err=> alert(`got an error as ${err}`),
   ()=>alert('Deletion of user completed')
  );
}

// getUserPosts(){
//   this.posts=this.UserService.getUserPosts(this.user.id);
// }
}
