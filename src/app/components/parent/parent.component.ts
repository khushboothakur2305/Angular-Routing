import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
DateToday:string;
  constructor() { }

  ngOnInit(): void {
  this.DateToday=new Date().toDateString();
  }

}
