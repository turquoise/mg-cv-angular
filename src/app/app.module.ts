import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import {
  MdToolbarModule,
  MdProgressBarModule,
  MdButtonModule,
  MdGridListModule,
  MdTabsModule,
  MdCardModule,
  MdMenuModule,
  MdIconModule,
  MdTableModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { NavComponent } from './nav/nav.component';

import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { SkillTabsComponent } from './skill-tabs/skill-tabs.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { DialogComponent } from './dialog/dialog.component';
import { ProjectsComponent } from './projects/projects.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    SkillTabsComponent,
    SkillDetailsComponent,
    DialogComponent,
    ProjectsComponent,
    AccordionComponent,
    ProfileComponent,
    ExperienceComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdToolbarModule,
    MdProgressBarModule,
    MdButtonModule,
    MdGridListModule,
    MdTabsModule,
    MdCardModule,
    MdMenuModule,
    MdIconModule,
    MdTableModule,
    FlexLayoutModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
