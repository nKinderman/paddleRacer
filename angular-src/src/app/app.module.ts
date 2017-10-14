// Import Modules
import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http'; 
import { RouterModule, Routes} from '@angular/router'; 

// Import Components 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RaceIndexComponent } from './components/race-index/race-index.component';
import { RaceNewComponent } from './components/race-new/race-new.component';
import { RaceShowComponent } from './components/race-show/race-show.component';
import { RaceUpdateComponent } from './components/race-update/race-update.component';
import { RacerNewComponent } from './components/racer-new/racer-new.component';
import { RacerEditComponent } from './components/racer-edit/racer-edit.component';
import { AboutComponent } from './components/about/about.component';


// Import Services
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { RaceService } from './services/race.service';
import { RacerService } from './services/racer.service';


// Declare routes
const appRoutes: Routes = [
  { path:'', component: HomeComponent},
  { path:'about', component: AboutComponent},
  { path:'register', component: RegisterComponent},
  { path:'login', component: LoginComponent},
  { path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path:'races', component: RaceIndexComponent},
  { path:'races/new', component: RaceNewComponent, canActivate:[AuthGuard]},
  { path:'races/:id', component: RaceShowComponent},
  { path:'races/:id/edit', component: RaceUpdateComponent, canActivate:[AuthGuard]},
  { path:'races/:id/racers/new', component: RacerNewComponent},
  { path:'races/:id/racers/:racer_id/edit', component: RacerEditComponent, canActivate:[AuthGuard]},
  { path: '**', redirectTo: '' }
]

// Include components, modules and services
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    RaceIndexComponent,
    RaceNewComponent,
    RaceShowComponent,
    RaceUpdateComponent,
    RacerNewComponent,
    RacerEditComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [
    ValidateService,
    AuthService,
    RaceService,
    RacerService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
