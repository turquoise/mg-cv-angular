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
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { SkillTabsComponent } from './skill-tabs/skill-tabs.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DialogComponent } from './dialog/dialog.component';
import { CarouselComponent } from './carousel/carousel.component';
import { WorkTabsComponent } from './work-tabs/work-tabs.component';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { CssCarouselComponent } from './css-carousel/css-carousel.component';
import { ProjectsComponent } from './projects/projects.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    WorkComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    SkillTabsComponent,
    SkillDetailsComponent,
    ContactFormComponent,
    DialogComponent,
    CarouselComponent,
    WorkTabsComponent,
    WorkDetailsComponent,
    CssCarouselComponent,
    ProjectsComponent,
    AccordionComponent
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
