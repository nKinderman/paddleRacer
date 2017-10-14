import { Component, OnInit } from '@angular/core';
import { RaceService } from '../../services/race.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-profile',
  templateUrl: './race-index.component.html',
  styleUrls: ['./race-index.component.css']
})
export class RaceIndexComponent implements OnInit {
  races: any[];

  constructor(
    private raceService: RaceService,
    private router: Router
  ) { }

  ngOnInit() {

  this.raceService.getRaces().subscribe( races => {
    this.races = races
  });

  }
}