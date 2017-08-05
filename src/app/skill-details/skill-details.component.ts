import { Component, OnInit, Input } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css'],
  providers: [ NgbProgressbarConfig ]
})
export class SkillDetailsComponent implements OnInit {

  @Input() skill;


  constructor(
    private dataService: DataService,
    config: NgbProgressbarConfig
  ) {
    config.max = 100;
    config.striped = false;
    config.animated = false;
  }

  ngOnInit() {

  }

  



}
