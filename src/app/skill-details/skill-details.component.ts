import { Component, OnInit, Input } from '@angular/core';

//import { DataService } from '../services/data.service';


@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css'],
  providers: [ ]
})
export class SkillDetailsComponent implements OnInit {

  @Input() skill;


  constructor() {}

  ngOnInit() {

  }



}
