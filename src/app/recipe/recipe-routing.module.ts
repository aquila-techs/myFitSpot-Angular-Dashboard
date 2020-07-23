import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { AllRecipesComponent } from "./all-recipes/all-recipes.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addrecipe',
        component: AddRecipeComponent,
        data: {
          title: 'Add Recipe',
          urls: [
            { title: 'Dashboard', url: '/' },
            { title: 'Add Recipe' }
          ]
        }
      },
      {
        path: 'all',
        component: AllRecipesComponent,
        data: {
          title: 'All Recipes',
          urls: [
            { title: 'Dashboard', url: '/' },
            { title: 'All Recipe' }
          ]
        }
      },
      {
        path: 'detail/:recipeId',
        component: RecipeDetailComponent,
        data: {
          title: 'Recipe',
          urls: [
            { title: 'All Recipes', url: '/recipes/all' },
            { title: 'Recipe' }
          ]
        }
      },
   ]  
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
