import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeService } from "../services/recipe.service";
import { ToastrService } from 'ngx-toastr';
import { environment } from "src/environments/environment";
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RecipeDetailComponent implements OnInit {


  recipe;
  imgUrl = environment.imgUrl;
  constructor(private router: Router, private actRoute: ActivatedRoute, private recipeS: RecipeService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.recipeS.getSingleRecipe(this.actRoute.snapshot.params.recipeId).subscribe(res => {
      if (res.status == true) {
        this.recipe = res.data;
        // console.log(this.recipe);
      }
        
    })
  }

}
