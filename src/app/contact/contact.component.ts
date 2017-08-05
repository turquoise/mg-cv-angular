import { Component, OnInit, TemplateRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  message;
  closeResult: string;

  constructor(
    private dataService: DataService,
    private router: Router,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  sendEmail(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    this.dataService.sendMail(submittedForm);

    this.openDialog();
    submittedForm.reset();
    submittedForm.setValue({ name: '', email: '', message: ''});
    //this.router.navigate(['/']);

  }

  log(name) {
    console.log('name ', name);
  }

  openDialog() {

    this.dialog.open(DialogComponent, {
      width: '400px',
      height: '200px'

    });
  }


}

