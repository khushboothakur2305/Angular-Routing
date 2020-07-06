import { Component, OnInit,OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
prop:String;
subscription:Subscription;
  constructor( private userService:UserService) { }

  ngOnInit(){
    this.subscription= this.userService.propchanged.subscribe(
    prop => this.prop=prop,
    err=> console.log("got an error as : ",err ),
    ()=>alert('the observable is complete')
   );
  }
  changeprop(){
    this.userService.setprop('bar');
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
