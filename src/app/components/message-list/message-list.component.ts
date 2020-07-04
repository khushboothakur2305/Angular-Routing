import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from "../../guards/confirmation/confirmation.guard";
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements CanComponentDeactivate {
confirm()
{
  return confirm("are you sure you want to navigate away");
}
  constructor() { }

  ngOnInit(): void {
  }

}
