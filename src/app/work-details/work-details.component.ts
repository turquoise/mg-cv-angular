import { Component, OnInit, Input } from '@angular/core';
import { fadeAnimation } from '../shared/animations';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css'],
  animations: [ fadeAnimation ]

})
export class WorkDetailsComponent implements OnInit {

  @Input() work;

  constructor() { }

  ngOnInit() {
  }

}
