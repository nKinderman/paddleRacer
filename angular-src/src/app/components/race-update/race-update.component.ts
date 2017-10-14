import { Component, OnInit } from '@angular/core';
import { RaceService } from '../../services/race.service';
import { ValidateService } from '../../services/validate.service';
import { Router, ActivatedRoute } from '@angular/router'; 
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-race-update',
  templateUrl: './race-update.component.html',
  styleUrls: ['./race-update.component.css']
})
export class RaceUpdateComponent implements OnInit {
  private sub: any;
  id: any;
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
    private validateService: ValidateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];  
    });

    this.raceService.getRace(this.id).subscribe( race => {
      this.race = race;
      // console.log(race);
    }); 
  }

  // Call raceService to edit race
  onEditRaceSubmit({value, valid}){
    
    if(!valid){
      this.flashMessagesService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    else{
      // Create Race
      this.raceService.updateRace(value, this.id).subscribe(data => {
        if(data.success){
          this.flashMessagesService.show('You have updated the race', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/races/' + this.id]);
        }
        else{
          this.flashMessagesService.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/races/' + this.id]);
        }
      });
    }
  }

}
