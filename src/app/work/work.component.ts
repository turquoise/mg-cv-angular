import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  animations: [ ]
})
export class WorkComponent implements OnInit {

  work = [];
  loadedLink;
  subscription: Subscription;


  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params) => {
        this.work = this.dataService.getWork(params.link);
        this.loadedLink = params.link;
        //console.log('loadedLink ', params.link);
      }
    );
    this.subscription = this.dataService.skillsTypeChanged.subscribe(
      () => {
        this.work = this.dataService.getWork(this.loadedLink);

      }
    );

    this.dataService.fetchWork();

  }

}
