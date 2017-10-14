import { Component, OnInit } from '@angular/core';
import { RacerService } from '../../services/racer.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-racer-edit',
  templateUrl: './racer-edit.component.html',
  styleUrls: ['./racer-edit.component.css']
})
export class RacerEditComponent implements OnInit {
  private sub1: any;
  private sub2: any;
  id: any;
  racerId: any;

  racer = {
    firstName:'',
    lastName:'',
    email:'',
    phone:0,
    age:0,
    hometown:'',
    gender:'',
    class:''
  }

  boatClass: String[];

  constructor(
    private racerService: RacerService, 
    private router: Router, 
    private flashMessagesService: FlashMessagesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.sub1 = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];  
    });

    this.sub2 = this.activatedRoute.params.subscribe(params => {
      this.racerId = params['racer_id'];  
    });

    this.racerService.getRacer(this.id, this.racerId).subscribe( racer => {
      this.racer = racer;
    }); 

    this.boatClass = [
      'Rec Kayak', 'Race Kayak', 
      'Sea Kayak', 'Rec Canoe',
      'Race Canoe', 'SUP Rec',
      'SUP Rec', 'Pedal Craft',
      'Unlimited'
    ];
  }

  // Call racerService to edit racer
  onEditRacerSubmit({value, valid}){
    if(valid){
      //Edit Racer
      this.racerService.updateRacer(value, this.id, this.racerId).subscribe(data => {
        if(data.success){
          this.flashMessagesService.show('Racer updated', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/races/' + this.id]);
        }
        else{
          this.flashMessagesService.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/races/' + this.id]);
        }
      });
    }
    else{
      this.flashMessagesService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
    }
  }

}
