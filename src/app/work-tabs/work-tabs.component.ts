import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';



@Component({
  selector: 'app-work-tabs',
  templateUrl: './work-tabs.component.html',
  styleUrls: ['./work-tabs.component.css'],
  providers: [ ]
})
export class WorkTabsComponent implements OnInit {

  work = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {

    this.dataService.fetchData()
      .subscribe( (data) => {
        //console.log('data ', data);
        //this.resume = data;
        this.work = data.work;
        //console.log('work tabs component ', this.work);
      });

  }

}
