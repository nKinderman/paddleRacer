import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  // check for empty input 
  validateRegister(user){
    if(user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined){
      return false;
    }
    else{
      return true;
    }
  }

  // check for empty input
  validateRace(race){
    if(race.name == undefined || race.date == undefined || race.location == undefined || race.image == undefined || race.description == undefined || race.cost == undefined){
      return false;
    }
    else{
      return true;
    }
  }

  // validate email 
  validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
