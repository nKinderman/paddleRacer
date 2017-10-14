import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; 
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  email: any;
  data: any;
  localUser = {
    id: '',
    name: '',
    email: ''
  }

  constructor(private http:Http) { }

  // add user to DB
  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/users/register', user, {headers: headers})
      .map(res => res.json());
  }

  // authenticate input credentials with DB 
  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/users/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

  // retrieve user info from DB
  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('api/users/profile', {headers: headers})
      .map(res => res.json());
  }

  // store user and token data locally
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  // retrieve token from local storage
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // retrieve user from local storage
  loadUser(){
    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);
    return this.user;
  }

  // check token for loggedin status
  loggedIn(){
    return tokenNotExpired('id_token');
  }

  // check for user ownership of race
  ownRace(ownerId){
    this.localUser = this.loadUser();
    if(ownerId == this.user.id){
      return true;
    }
    else{
      return false;
    }
  }

  // clear user and token and empty user storage
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
