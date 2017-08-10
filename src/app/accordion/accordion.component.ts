import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { expandCollapse } from './accordion.component.animation';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  animations: [ expandCollapse ]
})
export class AccordionComponent implements OnInit {

  @Input() edu;
  @Output() eduCourses = new EventEmitter<any>();
  courses;


  isExpanded: boolean;

  public status: any = {
    isFirstOpen: true,
    isOpen: false
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
    this.status.isOpen = !this.status.isOpen;
    console.log('edu.description.courses ', this.edu.description.courses);
    this.courses = this.edu.description.courses;
    console.log('course ', this.courses);
    this.eduCourses.emit(this.courses);
  }

  constructor() { }

  ngOnInit() {
  }





}
