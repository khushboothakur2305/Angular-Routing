import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-api-request',
  templateUrl: './api-request.component.html',
  styleUrls: ['./api-request.component.scss'],
})
export class ApiRequestComponent implements OnInit {
  post = {
    email: 'ayushmishra0810@gmail.com',
    password: '12356890',
    club_name: ' Child',
    city: 'Indore',
    address: 'abcd 12',
    cover_charge: 1000,
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  submit() {
    this.http
      .post(
        'https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/registeruser',
        this.post
      )
      .subscribe((re) => {
        console.log(re);
      });
  }
}
