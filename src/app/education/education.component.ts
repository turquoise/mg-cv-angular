import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { fadeAnimation } from '../shared/animations';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [ fadeAnimation ]
})
export class EducationComponent implements OnInit {


  public status: any = {
    isFirstOpen: true,
    isOpen: true
  }

  isExpanded: boolean;
  education = [];
  courses;



  constructor(private dataService: DataService) {

  }

  toggle(i) {
    this.isExpanded = !this.isExpanded;
    //this.status.isOpen = !this.status.isOpen;
    if (i === this.isExpanded) {
      return;
    }
  }

  updateCourse(event) {
    this.courses = event;
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
