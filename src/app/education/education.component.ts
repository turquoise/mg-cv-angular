import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { AccordionConfig } from 'ngx-bootstrap/accordion';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), {closeOthers: true});
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [{provide: AccordionConfig, useFactory: getAccordionConfig}]
})
export class EducationComponent implements OnInit {


  public status: any = {
    isFirstOpen: true,
    isOpen: true
  }

  education = [];


  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.fetchData()
      .subscribe( (data) => {
        console.log('data ', data);
        //this.resume = data;
        this.education = data.education;
        console.log('this.education ', this.education);
      });
  }


}
