import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


import { NotfoundComponent } from './404/not-found.component';
import { LockComponent } from './lock/lock.component';


import { AuthenticationRoutes } from './authentication.routing';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule,
    NgMultiSelectDropDownModule
  ],
  declarations: [
    NotfoundComponent,
    LockComponent
]
})
export class AuthenticationModule {}
