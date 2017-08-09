import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
//import { DataService } from '../services/data.service';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  data;

  constructor(
    private router: Router,
    @Inject(MD_DIALOG_DATA) data: any
  ) {
    //console.log('data ', data);
    this.data = data;
  }

  ngOnInit() {
  }

  onClose() {
    this.router.navigate(['/']);
  }

}
