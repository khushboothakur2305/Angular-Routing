import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from 'src/app/interfaces/posts';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-http-call',
  templateUrl: './http-call.component.html',
  styleUrls: ['./http-call.component.scss'],
})
export class HttpCallComponent implements OnInit {
  constructor(private http: HttpClient) {}
  posts: any[] = [];
  comments: any[] = [];
  photos: any[] = [];
  users: any[] = [];
  album: any[] = [];
  todo: any[] = [];
  post2: boolean = false;
  showpost: string = 'show Posts';
  comment2: boolean = false;
  commentpost: string = 'show Comments';
  album2: boolean = false;
  albumpost: string = 'show Albumn';
  photos2: boolean = false;
  photospost: string = 'show Photos';
  todo2: boolean = false;
  todopost: string = 'show Todo';
  user2: boolean = false;
  userpost: string = 'show User';
  ngOnInit() {}
  gposts() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((re) => {
        console.log(re);
        this.posts = re;
      });
  }
  gcomment() {
    this.http
      .get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((re) => {
        console.log(re);
        this.comments = re;
      });
  }
  galbum() {
    this.http
      .get('https://jsonplaceholder.typicode.com/albums')
      .subscribe((re) => {
        console.log(re);
        this.album = re;
      });
  }
  gphotos() {
    this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .subscribe((re) => {
        console.log(re);
        this.photos = re;
      });
  }
  gtodo() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((re) => {
        console.log(re);
        this.todo = re;
      });
  }
  gusers() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((re) => {
        console.log(re);
        this.users = re;
      });
  }
  getposts() {
    this.gposts();
    if (this.post2 === true) {
      this.showpost = 'Show Posts';
      this.post2 = false;
    } else {
      this.post2 = true;
      this.showpost = 'Hide Posts';
    }
  }
  getcomments() {
    this.gcomment();
    if (this.comment2 === true) {
      this.commentpost = 'Show Comments';
      this.comment2 = false;
    } else {
      this.comment2 = true;
      this.commentpost = 'Hide Comments';
    }
  }
  getalbum() {
    this.galbum();
    if (this.album2 === true) {
      this.albumpost = 'Show Albums';
      this.album2 = false;
    } else {
      this.album2 = true;
      this.albumpost = 'Hide Albums';
    }
  }
  getphotos() {
    this.gphotos();
    if (this.photos2=== true) {
      this.photospost = 'Show Photos';
      this.photos2= false;
    } else {
      this.photos2= true;
      this.photospost = 'Hide Photos';
    }
  }
  todolist() {
    this.gtodo();
    if (this.todo2 === true) {
      this.todopost = 'Show Todo';
      this.todo2 = false;
    } else {
      this.todo2 = true;
      this.todopost = 'Hide Todo';
    }
  }
  getusers() {
    this.gusers();
    if (this.user2 === true) {
      this.userpost = 'Show Users';
      this.user2 = false;
    } else {
      this.user2 = true;
      this.userpost = 'Hide Users';
    }
  }
}
