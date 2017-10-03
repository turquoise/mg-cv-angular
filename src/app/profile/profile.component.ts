import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../shared/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [ fadeAnimation ]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  gotTo(location: string) {
    window.location.hash = '';
    window.location.hash = location;
  }

}
