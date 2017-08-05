import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {

  @Input() work;

  constructor() { }

  ngOnInit() {
  }

}
