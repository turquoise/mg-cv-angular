import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { fadeAnimation } from '../shared/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [ fadeAnimation ]
})
export class ExperienceComponent implements OnInit {

  work = [];
  selected: any;
  start: any;
  itemSelected: boolean = false;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.dataService.fetchData()
      .subscribe( (data) => {
        //console.log('data ', data);
        //this.resume = data;
        this.start = data.work[0];
        this.work = data.work;
        //console.log(this.startwk);

        if (!this.itemSelected) {
          this.selected = this.start;
          this.itemSelected = true;
        }
      });
  }

  onSelect(item) {
    this.itemSelected = true;
    this.selected = item;
  }

}
