import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RaceService } from '../../services/race.service';
import { Router } from '@angular/router'; 
import { FlashMessagesService} from 'angular2-flash-messages'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = {
    name:'',
    username: '',
    email:''
  }
  races: any[];
  currentUser: any[];
  i: number = 0;
  myRaces: any[] = [];


  constructor(
    private authService: AuthService,
    private raceService: RaceService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user

      this.raceService.getRaces().subscribe( races => {
        this.races = races
        for(this.i = 0; this.i < this.races.length; this.i++){
          if(races[this.i].author.username == this.user.username){
            this.myRaces.push(races[this.i]); 
          }
        }
      });

    }, 
    err => {
      console.log(err);
      console.log(this.user);
      return false;
    });
  }

    // call logout from authService, display logout message, navigate to login route  
    onLogoutClick(){
      this.authService.logout();
      this.flashMessagesService.show('You are logged out', {cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate(['/login']);
      return false;
    }

}
