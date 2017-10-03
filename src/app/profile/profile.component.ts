import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes,
  animation,
  useAnimation }
  from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
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
