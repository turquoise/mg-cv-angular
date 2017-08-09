import { Injectable } from '@angular/core';
import { Http, Response, Headers  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {


  private education = [];
  private work = [];
  private skills = [];

  skillsTypeChanged = new Subject<void>();
  workLinkChanged = new Subject<void>();

  constructor(private http: Http) {}

  getSkills(chosenType) {

    return this.skills.filter( (result) => {
      return result.type === chosenType;
    });

  }

  getWork(chosenLink) {

    return this.work.filter( (result) => {
      return result.link === chosenLink;
    });

  }

  fetchSkills() {
    return this.http.get('assets/resume.json')
      .map( (response: Response) => {
        const data = response.json();
        const extractedSkills = data.skills;
        const skills = extractedSkills.map( (res) => {
          return {
            name: res.name,
            type: res.type,
            description: res.description,
            keywords: res.keywords
          };
        });
        // console.log('DataService skills ', skills);
        return skills;
      })
      .subscribe(
        (data) => {
          console.log('DataService skills data ', data);
          this.skills = data;
          this.skillsTypeChanged.next();
        }
      );
  }

  fetchWork() {
    return this.http.get('assets/resume.json')
      .map( (response: Response) => {
        const data = response.json();
        const extractedWork = data.work;
        const work = extractedWork.map( (res) => {
          return {
            company: res.company,
            position: res.position,
            startDate: res.startDate,
            endDate: res.endDate,
            summary: res.summary,
            link: res.link,
            highlights: res.highlights
          };
        });
        // console.log('DataService work ', work);
        return work;
      })
      .subscribe(
        (data) => {
          console.log('Dataservice work data ', data);
          this.work = data;
          this.workLinkChanged.next();
        }
      );

  }

  fetchData() {
    return this.http.get('assets/resume.json')
      .map( (response: Response) => {
        const data = response.json();
        return data;
      });
  }

  sendMail(submittedForm) {
    console.log('send');
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post('https://formspree.io/monica.gosschalk@btinternet.com',
        {
          name: submittedForm.value.name,
          _replyTo: submittedForm.value.email,
          message: submittedForm.value.message
        },
        {
          'headers' : headers
        }
      ).subscribe( res => console.log('res ', res.json()));

  }



}
