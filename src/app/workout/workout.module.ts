import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { QuillModule } from 'ngx-quill';
import Counter from '../recipe/counter';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkoutRoutingModule } from './workout-routing.module';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { AllWorkoutComponent } from './all-workout/all-workout.component';


@NgModule({
  declarations: [AddWorkoutComponent, AllWorkoutComponent],
  imports: [
    CommonModule,
    WorkoutRoutingModule,
    FormsModule,
    NgbModule,
    PerfectScrollbarModule,
    AccordionModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    QuillModule.forRoot({
      customModules: [{
        implementation: Counter,
        path: 'modules/counter'
      }],
      customOptions: [{
        import: 'formats/font',
        whitelist: ['mirza', 'roboto', 'aref', 'serif', 'sansserif', 'monospace']
      }]
    }),
  ]
})
export class WorkoutModule { }
