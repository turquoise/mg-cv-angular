import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-skill-tabs',
  templateUrl: './skill-tabs.component.html',
  styleUrls: ['./skill-tabs.component.css']
})
export class SkillTabsComponent implements OnInit {

  skills = [];


  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {


    this.dataService.fetchData()
      .subscribe( (data) => {
        //console.log('data ', data);
        //this.resume = data;
        this.skills = data.skills;
        console.log('SkillTabsComponent skills ', this.skills);
      });

  }



}
