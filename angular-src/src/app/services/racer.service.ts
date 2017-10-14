import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; 
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class RacerService {
  id: any;
  authToken: any;

  constructor(private http:Http) { }

// add racer to server DB
newRacer(racer, id){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post(('api/races/' + id + '/racers'), racer, {headers: headers})
    .map(res => res.json());
}

// get one racer from server DB
getRacer(raceId, racerId){
  return this.http.get('api/races/' + raceId + '/racers/' + racerId)
    .map(res => res.json());
}

// update race in server DB
updateRacer(racer, raceId, racerId){
  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  return this.http.put(('api/races/' + raceId + '/racers/' + racerId), racer, {headers: headers})
    .map(res => res.json());
}

// delete race from server DB
deleteRacer(raceId, racerId){
  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  return this.http.delete(('api/races/' + raceId + '/racers/' + racerId), {headers: headers})
    .map(res => res.json());
}

// load token from local storage
loadToken(){
  const token = localStorage.getItem('id_token');
  this.authToken = token;
}

}


