// Import modules and service
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  user = {
    id: '',
    name: '',
    email: ''
  }

  email: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashmessagesService: FlashMessagesService
  ) {}

  ngOnInit() {

    this.user = this.authService.loadUser();
    
    if(this.authService.loggedIn()){
      this.isLoggedIn = true;
    }
    else{
      this.isLoggedIn = false;
    }
  }



  // call logout from authService, display logout message, navigate to login route  
  onLogoutClick(){
    this.authService.logout();
    this.flashmessagesService.show('You are logged out', {cssClass: 'alert-success', timeout: 3000 });
    this.router.navigate(['/login']);
    return false;
  }

}
