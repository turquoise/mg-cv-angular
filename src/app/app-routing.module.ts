import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkTabsComponent } from './work-tabs/work-tabs.component';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { SkillTabsComponent } from './skill-tabs/skill-tabs.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

const routes = [
  { path: 'profile', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'education', component: EducationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillTabsComponent, children: [
    { path: '', redirectTo: 'ux', pathMatch: 'full'},
    { path: ':type', component: SkillsComponent }
  ]},
  { path: 'experience', component: WorkTabsComponent, children: [
    { path: '', redirectTo: 'computing', pathMatch: 'full' },
    { path: ':link', component: WorkComponent }
  ]},

  { path: '**', redirectTo: '/profile' }
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
