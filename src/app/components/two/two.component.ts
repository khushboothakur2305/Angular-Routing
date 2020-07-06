import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent implements OnInit {
  prop: String;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.propchanged.subscribe(
      (prop) => (this.prop = prop),
      (err) => console.log('got an error as : ', err),
      () => alert('the observable is complete')
    );
  }
  changeprop() {
    this.userService.setprop('bar');
  }
}
