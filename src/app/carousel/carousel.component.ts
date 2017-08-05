import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {


  constructor() { }


  ngOnInit() {

  }

  ngAfterViewInit() {
    $(document).ready(function() {
      

    });

  }




}
