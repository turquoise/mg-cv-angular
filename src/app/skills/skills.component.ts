import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [ ]
})
export class SkillsComponent implements OnInit {

 skills = [];
 loadedType;
 subscription: Subscription;


  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params) => {
        console.log('skills params ', params);
        this.skills = this.dataService.getSkills(params.type);
        this.loadedType = params.type;
        console.log('loadedType ', params.type);
      }
    );
    this.subscription = this.dataService.skillsTypeChanged.subscribe(
      () => {
        this.skills = this.dataService.getSkills(this.loadedType);

      }
    );

    this.dataService.fetchSkills();
  }

}
