import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { fadeAnimation } from '../shared/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ fadeAnimation ]
})
export class HomeComponent implements OnInit, OnDestroy {

  resume;
  basics;



  constructor(
    private dataService: DataService) {}

  ngOnInit() {
    // this.dataService.getData()
    //   .subscribe( (data) => {
    //     console.log(data);
    //     this.resume = data;
    //   });

    this.dataService.fetchData()
      .subscribe( (data) => {
        console.log('data ', data);
        this.resume = data;
        this.basics = data.basics;
      });

  }

  ngOnDestroy() {

  }

}
