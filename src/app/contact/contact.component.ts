import { Component, OnInit, TemplateRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { fadeAnimation } from '../shared/animations';

import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [ fadeAnimation ]
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
    console.log('submittedForm.value.name ', submittedForm.value.name);
    if (submittedForm.invalid) {
      return;
    }
    this.dataService.sendMail(submittedForm);

    this.openDialog(submittedForm);

    submittedForm.reset();
    submittedForm.setValue({ name: '', email: '', message: ''});
    //this.router.navigate(['/']);

  }

  log(name) {
    console.log('name ', name);
  }

  openDialog(form) {

    this.dialog.open(DialogComponent, {
      width: '400px',
      height: '200px',
      data: {
        name: form.value.name
      }
    });
  }


}
