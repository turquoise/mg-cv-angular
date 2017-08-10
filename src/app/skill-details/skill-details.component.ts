import { Component, OnInit, Input } from '@angular/core';

//import { DataService } from '../services/data.service';
import { fadeAnimation } from '../shared/animations';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css'],
  animations: [ fadeAnimation ]
})
export class SkillDetailsComponent implements OnInit {

  @Input() skill;


  constructor() {}

  ngOnInit() {

  }



}
