import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkTabsComponent } from './work-tabs/work-tabs.component';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { SkillTabsComponent } from './skill-tabs/skill-tabs.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

const routes = [
  { path: 'profile', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillTabsComponent, children: [
    { path: '', redirectTo: 'ux', pathMatch: 'full'},
    { path: ':type', component: SkillsComponent }
  ]},
  { path: 'work', component: WorkTabsComponent, children: [
    { path: '', redirectTo: 'c1', pathMatch: 'full'},
    { path: ':link', component: WorkComponent }
  ]},

  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {

}
