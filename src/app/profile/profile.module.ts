import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ParseDatePipe } from '../pipe/parse-date.pipe';

import { AccordionModule } from '@syncfusion/ej2-angular-navigations';  

@NgModule({
  declarations: [ProfileComponent,ParseDatePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ProfileRoutingModule,
    AccordionModule
  ]
})
export class ProfileModule { }
