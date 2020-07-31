import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { QuillModule } from 'ngx-quill';
import Counter from './counter';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipeRoutingModule } from './recipe-routing.module';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


@NgModule({
  declarations: [AddRecipeComponent, AllRecipesComponent, RecipeDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    PerfectScrollbarModule,
    AccordionModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    RecipeRoutingModule,
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
export class RecipeModule { }
