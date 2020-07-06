import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubuilt-in-str-dir',
  templateUrl: './bubuilt-in-str-dir.component.html',
  styleUrls: ['./bubuilt-in-str-dir.component.scss'],
})
export class BubuiltInStrDirComponent implements OnInit {
  messages: string[];
  showlist: boolean;
  constructor() {}

  ngOnInit() {
    this.messages = [
      'message1',
      'message2',
      'message3',
      'message4',
      'message5',
      'message6',
    ];
    this.showlist = true;
  }
  alertType: string;
}
