import { Component, OnInit } from '@angular/core';
import { RaceService } from '../../services/race.service';
import { RacerService } from '../../services/racer.service';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router'; 
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-race-show',
  templateUrl: './race-show.component.html',
  styleUrls: ['./race-show.component.css']
})
export class RaceShowComponent implements OnInit {
  race = {
    name:'',
    date:'',
    location:'',
    image:'',
    description:'',
    cost: 0,
    racers: [],
    author: {
      id: '',
      username: ''
    }
  }
  private sub: any;
  id: any;
  
  constructor(
    private raceService: RaceService,
    private racerService: RacerService,
    private authService: AuthService,
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
    });

  }

  // Call raceService delete race
  onDeleteRaceSubmit(){
    if(confirm('Are you sure you want to delete?')){
      this.raceService.deleteRace(this.id).subscribe(data => {
        if(data.success){
          console.log(data);
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/races']);
        }
        else{
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/races/']);
        }
      });
    }
  }

  // Call racerService to delete racer 
  onDeleteRacerSubmit(racerId){
    if(confirm('Are you sure you want to delete?')){
      this.racerService.deleteRacer(this.id, racerId).subscribe(data => {
        if(data.success){
          this.raceService.getRace(this.id).subscribe( race => {
            this.race = race;
          });
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/races/' + this.id ]);
        }
        else{
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/races/' + this.id ]);
        }
      });
    }
  }

}
