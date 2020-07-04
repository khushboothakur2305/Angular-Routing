import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivehost',
  templateUrl: './directivehost.component.html',
  styleUrls: ['./directivehost.component.scss']
})
export class DirectivehostComponent implements OnInit {
showunless:boolean;
  constructor() { }

  ngOnInit(): void {
    this.showunless=true
  }

}
