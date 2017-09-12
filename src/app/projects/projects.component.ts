import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../shared/animations';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [ fadeAnimation ]
})
export class ProjectsComponent implements OnInit {



  public cols: Observable<number>;

  constructor(private observableMedia: ObservableMedia) { }

  ngOnInit() {
    //this.cols = 3;
    // set cols
     if (this.observableMedia.isActive("xs")) {
       this.cols = Observable.of(1);
     } else if (this.observableMedia.isActive("sm") || this.observableMedia.isActive("md")) {
       this.cols = Observable.of(2);
     } else if (this.observableMedia.isActive("lg") || this.observableMedia.isActive("xl")) {
       this.cols = Observable.of(2);
     }

     // observe changes
     this.observableMedia.asObservable()
     .subscribe(change => {
       switch (change.mqAlias) {
         case "xs":
           return this.cols = Observable.of(1);
         case "sm":
           return this.cols = Observable.of(2);
         case "md":
           return this.cols = Observable.of(2);
         case "lg":
         case "xl":
           return this.cols = Observable.of(2);
       }
     });
  }

}
