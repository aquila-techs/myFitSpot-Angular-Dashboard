import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipeRoutingModule } from './recipe-routing.module';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';


@NgModule({
  declarations: [AddRecipeComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule { }
