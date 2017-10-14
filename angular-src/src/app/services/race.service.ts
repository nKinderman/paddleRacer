import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; 
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class RaceService {
  authToken: any;
  id: any;

  constructor(private http:Http) { }

  // get races from server DB
  getRaces(){
    return this.http.get('api/races')
      .map(res => res.json());
  }

  // add race to server DB
  newRace(race){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/races', race, {headers: headers})
      .map(res => res.json());
  }

  // get one race from server DB
  getRace(id){
    return this.http.get('api/races/' + id)
      .map(res => res.json());
  }

  // delete race from server DB
  deleteRace(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.delete(('api/races/' + id), {headers: headers})
      .map(res => res.json());
  }

  // update race in server DB
  updateRace(race, id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.put(('api/races/' + id), race, {headers: headers})
      .map(res => res.json());
  }

  // load token from local storage
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}
