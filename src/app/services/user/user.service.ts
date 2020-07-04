import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _rootURL="https://jsonplaceholder.typicode.com/users";
 private _rootpostsURL="https://jsonplaceholder.typicode.com/posts?";
 private users :IUser[]

 constructor(private http: HttpClient) { }
  getUsersByRest():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this._rootURL);
  }
  getUsers():IUser[] {
    return this.users;

  }
  getUsersviaIdRest(id:number):Observable<IUser>
  {
return this.http.get<IUser>(`${this._rootURL}/${id}`);

  }
  CreateUser (user:IUser):Observable<IUser>{
    return this.http.post<IUser>(this._rootURL,user);
  }
UpdateUser(user:IUser):Observable<IUser>{
  return this.http.put<IUser>(`${this._rootURL}/${user.id}`,user);
}
DeleteUser(id:number):Observable<IUser>{
  return this.http.delete<IUser>(`${this._rootURL}/${id}`);
}

// getUserPosts(user:IUser):Observable<any>{
//   let params = new HttpParams().set('userId',id.toString());
//   return this.http.get(this._rootpostsURL,{params});
// }
}
