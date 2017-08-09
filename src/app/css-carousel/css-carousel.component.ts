import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-css-carousel',
  templateUrl: './css-carousel.component.html',
  styleUrls: ['./css-carousel.component.css']
})
export class CssCarouselComponent implements OnInit {

  public images = [
    { "title": "We are covered", "url": "http://lorempixel.com/g/900/300/abstract/1" },
    { "title": "Generation Gap", "url": "http://lorempixel.com/g/900/300/abstract/2" },
    { "title": "Potter Me", "url": "http://lorempixel.com/g/900/300/abstract/3" },
    { "title": "Pre-School Kids", "url": "http://lorempixel.com/g/900/300/abstract/4" },
    { "title": "Young Peter Cech", "url": "http://lorempixel.com/g/900/300/abstract/5" }
  ];



  constructor() { }

  ngOnInit() {
  }



}
