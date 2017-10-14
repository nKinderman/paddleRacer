import { Component, OnInit } from '@angular/core';
import { RaceService } from '../../services/race.service';
import { RacerService } from '../../services/racer.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-racer-new',
  templateUrl: './racer-new.component.html',
  styleUrls: ['./racer-new.component.css']
})
export class RacerNewComponent implements OnInit {
  private sub: any;
  id: any;

  racer = {
    firstName:'',
    lastName:'',
    email:'',
    phone:0,
    age:0,
    hometown:'',
    gender:'',
    class:''
  };

  boatClass: String[];

  constructor(
    private raceService: RaceService, 
    private racerService: RacerService, 
    private router: Router, 
    private flashMessagesService: FlashMessagesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];  
    });

    this.boatClass = [
      'Rec Kayak', 'Race Kayak', 
      'Sea Kayak', 'Rec Canoe',
      'Race Canoe', 'SUP Rec',
      'SUP', 'Pedal Craft',
      'Unlimited'
    ];
  }

  // Call racerService to register racer
  onNewRacerSubmit({value, valid}){
    if(valid){
      //Create Racer
      this.racerService.newRacer(value, this.id).subscribe(data => {
        if(data.success){
          this.flashMessagesService.show('You are registered', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/races/' + this.id]);
        }
        else{
          this.flashMessagesService.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/races/' + this.id + '/racers/new']);
        }
      });
    }
    else{
      this.flashMessagesService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
    }
  }

}
