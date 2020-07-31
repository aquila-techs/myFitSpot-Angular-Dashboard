import { Component, OnInit } from '@angular/core';
import Quill from 'quill';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';  
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { RecipeService } from "../services/recipe.service";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
  
export class AddRecipeComponent implements OnInit {

  recipe = {
    nameEn: "", nameNl: "", recipeEn: "", recipeNl: "", time: "",videoUrl:"", recipeUrl: "", mealType: [],specification:[],
    carbs: [], protein: [], fats: [], fruits: [], vegetables: [], herbs: []
  }

  mType = ["Vegan", "Vegetarian", "Ovo Vegetarian", "Lacto-ovo vegetarian"];
  specification = ["Glutenfree", "Lactosefree", "High crab ", "High fat", "High protein"];
  ingredient = {} as any;
  grams = ""; 
  carb = {} as any;
  fruit = {} as any;
  prot = {} as any;
  fat = {} as any;
  vegetable = {} as any;
  herb = {} as any;
  carbs = [];
  protein = [];
  fats = [];
  fruits = [];
  vegetables = [];
  herbs = [];

  fileName;
  file;
  imageUrl: string | ArrayBuffer = "";

  public config: PerfectScrollbarConfigInterface = {};
  constructor(private toastr: ToastrService,private router:Router,private recipeS:RecipeService) { }

  ngOnInit(): void {
    this.recipeS.getAllCarbs().subscribe(res => {
      if (res.status === true) {
        this.carbs = res.data
      }
    })
    this.recipeS.getAllFruits().subscribe(res => {
      if (res.status === true) {
        this.fruits = res.data
      }
    })
    this.recipeS.getAllHerbs().subscribe(res => {
      if (res.status === true) {
        this.herbs = res.data
      }
    })
    this.recipeS.getAllProtein().subscribe(res => {
      if (res.status === true) {
        this.protein = res.data
      }
    })
    this.recipeS.getAllVegetables().subscribe(res => {
      if (res.status === true) {
        this.vegetables = res.data
      }
    })
    this.recipeS.getAllfats().subscribe(res => {
      if (res.status === true) {
        this.fats = res.data
      }
    })
  }


  created(event: Quill) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event)
  }

  AddRecipe() {
    // console.log(this.recipe,this.file)
    this.recipeS.createRecipe(this.recipe,this.file).subscribe(res => {
      console.log(res)
      if (res.status == true) {
        this.toastr.success("Recipe Published!", 'Success!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
        setTimeout(()=>this.router.navigateByUrl('/recipes/all'),1000)
      } else {
        this.toastr.error(res.message, 'Oops!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      }
    })
  }

  onChange(file: File) {
    // console.log(file)
    if (file) {
      this.fileName = file.name;
      this.file = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = event => {
        this.imageUrl = reader.result;
      };
    }
  }

  addMealType(meal) {
    console.log(meal)
    let check = this.recipe.mealType.includes(meal);
    // console.log("Check:",check)
    if (check === true) {
      this.recipe.mealType = this.recipe.mealType.filter(ele => ele != meal);
      // console.log("Meal from True:",this.recipe.mealType);
    } else {
      this.recipe.mealType.push(meal);
      // console.log("Meal from false:",this.recipe.mealType)
    }
  }
     addSpecification(spec) {
        let check = this.recipe.specification.includes(spec);
        if (check === true) {
          this.recipe.specification = this.recipe.specification.filter(ele => ele != spec);
        } else{
          this.recipe.specification.push(spec);
       } 
     }
  
  addCarb(form:NgForm) {
    // console.log(this.carb)
    let check = this.recipe.carbs.some(ele =>ele.ingredient._id == this.carb.ingredient._id);
    // console.log("Check:",check)
    if (check === true) {
      this.toastr.info("Already Added!", 'Error!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      //  console.log("Carb from true:",this.recipe.carbs) 
    } else {
      let totalkCal = this.carb.grams * this.carb.ingredient.value;
      this.carb.kCal = totalkCal;
      this.recipe.carbs.push(this.carb);
      this.carb = {};
      // console.log("Carb from false:",this.recipe.carbs)
   } 
  }

  addfruit(form:NgForm) {
    // console.log(this.fruit)
    let check = this.recipe.fruits.some(ele =>ele.ingredient._id == this.fruit.ingredient._id);
    // console.log("Check:",check)
    if (check === true) {
      this.toastr.info("Already Added!", 'Error!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      //  console.log("Fruit from true:",this.recipe.fruits) 
    } else {
      let totalkCal = this.fruit.grams * this.fruit.ingredient.value;
      this.fruit.kCal = totalkCal;
      this.recipe.fruits.push(this.fruit);
      this.fruit = {};
      // console.log("Fruit from false:",this.recipe.fruits)
   } 
  }
  addvegetable(form:NgForm) {
    // console.log(this.vegetable)
    let check = this.recipe.vegetables.some(ele =>ele.ingredient._id == this.vegetable.ingredient._id);
    // console.log("Check:",check)
    if (check === true) {
      this.toastr.info("Already Added!", 'Error!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      //  console.log("Vegetable from true:",this.recipe.vegetables) 
    } else {
      let totalkCal = this.vegetable.grams * this.vegetable.ingredient.value;
      this.vegetable.kCal = totalkCal;
      this.recipe.vegetables.push(this.vegetable);
      this.vegetable = {};
      // console.log("Vegetable from false:",this.recipe.vegetables)
   } 
  }
  addherb(form:NgForm) {
    // console.log(this.herb)
    let check = this.recipe.herbs.some(ele =>ele.ingredient._id == this.herb.ingredient._id);
    // console.log("Check:",check)
    if (check === true) {
      this.toastr.info("Already Added!", 'Error!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      //  console.log("Herb from true:",this.recipe.herbs) 
    } else {
      let totalkCal = this.herb.grams * this.herb.ingredient.value;
      this.herb.kCal = totalkCal;
      this.recipe.herbs.push(this.herb);
      this.herb = {};
      // console.log("herb from false:",this.recipe.herbs)
   } 
  }
  addprotein(form:NgForm) {
    // console.log(this.protein)
    let check = this.recipe.protein.some(ele =>ele.ingredient._id == this.prot.ingredient._id);
    // console.log("Check:",check)
    if (check === true) {
      this.toastr.info("Already Added!", 'Error!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      //  console.log("Protein from true:",this.recipe.protein) 
    } else {
      let totalkCal = this.prot.grams * this.prot.ingredient.value;
      this.prot.kCal = totalkCal;
      this.recipe.protein.push(this.prot);
      this.prot = {};
      // console.log("Protein from false:",this.recipe.protein)
   } 
  }
  addfat(form:NgForm) {
    // console.log(this.fat)
    let check = this.recipe.fats.some(ele =>ele.ingredient._id == this.fat.ingredient._id);
    // console.log("Check:",check)
    if (check === true) {
      this.toastr.info("Already Added!", 'Error!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      //  console.log("Fat from true:",this.recipe.fats) 
    } else {
      let totalkCal = this.fat.grams * this.fat.ingredient.value;
      this.fat.kCal = totalkCal;
      this.recipe.fats.push(this.fat);
      this.fat = {};
      // console.log("Fat from false:",this.recipe.fats)
   } 
 }
  
}
