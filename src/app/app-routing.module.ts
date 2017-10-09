import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EducationComponent } from './education/education.component';
import { SkillTabsComponent } from './skill-tabs/skill-tabs.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';

const routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full'},
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'education', component: EducationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillTabsComponent, children: [
    { path: '', redirectTo: 'js', pathMatch: 'full'},
    { path: ':type', component: SkillsComponent }
  ]},
  // { path: 'experience', component: WorkTabsComponent, children: [
  //   { path: '', redirectTo: 'computing', pathMatch: 'full' },
  //   { path: ':link', component: WorkComponent }
  // ]},

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
