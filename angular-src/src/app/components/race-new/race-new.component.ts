import { Component, OnInit } from '@angular/core';
import { RaceService } from '../../services/race.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-race-new',
  templateUrl: './race-new.component.html',
  styleUrls: ['./race-new.component.css']
})
export class RaceNewComponent implements OnInit {
  race = {
    name:'',
    date:'',
    location:'',
    image:'',
    description:'',
    cost: 0
  }

  constructor(
    private raceService: RaceService, 
    private router: Router, 
    private flashMessagesService: FlashMessagesService,
  ) { }

  ngOnInit() {
  }

  // call raceService to add new race to DB
  onNewRaceSubmit({value, valid}){
    if(valid){
      //Create Race
      this.raceService.newRace(value).subscribe(data => {
        if(data.success){
          this.flashMessagesService.show('You have created a new race', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/races']);
        }
        else{
          this.flashMessagesService.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/races/new']);
        }
      });
    }
    else{
      this.flashMessagesService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
    }
  }

}
