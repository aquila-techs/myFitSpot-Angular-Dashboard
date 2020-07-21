import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RecipeService } from "../services/recipe.service";

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  page = 1;
  collSize = 0;
  numOfItems = 10;

  recipes;


  constructor(private router:Router, private actRout: ActivatedRoute,private recipeS:RecipeService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.actRout.queryParamMap.subscribe(qparams => {
      this.page = parseInt(qparams.get('page'));
      console.log(this.page);
      this.recipeS.getUserRecipes({page:this.page,numOfRecipes:this.numOfItems}).subscribe(res => {
        console.log(res)
        if (res.status === true) {
          this.recipes = res.data;
          this.collSize = res.tcount;
        }
      })
    })
  }


  deleteRecipe(recipeId,i) {
    console.log(recipeId)
    this.recipeS.deleteUserRecipes(recipeId).subscribe(res => {
      if (res.status === true) {
        this.toastr.success("Recipe Deleted!", 'Success!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
        this.recipes.splice(i,1)
      } else {
        this.toastr.error(res.message, 'Oops!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      }
        
      
    })
  }

  pagination(val) {
    this.router.navigate([], {
      queryParams: { page: (val) ? val : 1 },
      queryParamsHandling: 'merge'
    });
  }

}
