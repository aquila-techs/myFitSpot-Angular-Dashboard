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
    nameEn: "", nameNl: "", recipeEn: "", recipeNl: "", time: "", videoUrl: "", recipeUrl: "", pricing: "", mealType: [], specification: [],
    carbs: [], protein: [], fats: [], fruits: [], vegetables: [], herbs: [], recipeType: [], alcogolicBeverages: [], totalIngredients: [],
    nonAlcoholicDrinks: [], composedMeals: []
  }

  mType = ["Vegan", "Vegetarian", "Omnivore"];
  rType = ["Breakfast", "lunch", "Snack", "Dinner"];
  specification = ["Glutenfree", "Lactosefree", "High crab ", "High fat", "High protein"];
  ingredient = {} as any;
  grams = "";
  carb = {} as any;
  fruit = {} as any;
  prot = {} as any;
  fat = {} as any;
  vegetable = {} as any;
  herb = {} as any;
  alcoholicBeverage = {} as any;
  nonAlcoholicBeverage = {} as any;
  composedMeal = {} as any;
  carbs = [];
  protein = [];
  fats = [];
  fruits = [];
  vegetables = [];
  herbs = [];
  alcoholicBeverages = [];
  nonAlcoholicBeverages = [];
  composedMeals = [];

  fileName;
  file;
  imageUrl: string | ArrayBuffer = "";

  public config: PerfectScrollbarConfigInterface = {};
  constructor(private toastr: ToastrService, private router: Router, private recipeS: RecipeService) { }

  ngOnInit(): void {
    this.recipeS.getAllCarbs().subscribe(res => {
      console.log('carbs =====> ', res)
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
    this.recipeS.getAllAlcoholicBeverages().subscribe(res => {
      console.log('getAllAlcoholicBeverages =======> ', res);
      if (res.status === true) {
        this.alcoholicBeverages = res.data
      }
    })
    this.recipeS.getAllNonAlcoholicBeverages().subscribe(res => {
      console.log('nonAlcoholicBeverages =======> ', res);
      if (res.status === true) {
        this.nonAlcoholicBeverages = res.data
      }
    })
    this.recipeS.getAllComposedMeals().subscribe(res => {
      console.log('composedMeals =======> ', res);
      if (res.status === true) {
        this.composedMeals = res.data
      }
    })
  }


  created(event: Quill) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event)
  }

  AddRecipe() {
    console.log(this.recipe)
    this.addTotalCarbs();
    this.addTotalFats();
    this.addTotalAlcoholicBeverages();
    this.addTotalFruits();
    this.addTotalHerbs();
    this.addTotalProteins();
    this.addTotalVegetables();
    this.recipeS.createRecipe(this.recipe, this.file).subscribe(res => {
      // console.log(res)
      if (res.status == true) {
        this.toastr.success("Recipe Published!", 'Success!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
        setTimeout(() => this.router.navigateByUrl('/recipes/all'), 1000)
      } else {
        this.toastr.error(res.message, 'Oops!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      }
    })
  }

  addTotalCarbs() {
    if (this.recipe.carbs.length > 0) {
      console.log('carbs available')
      var totalCarbs = 0;
      this.recipe.carbs.forEach((data) => {
        console.log(data);
         totalCarbs += data.grams
      })
      var carbsSum = {
        totalCarbs: totalCarbs
      }
      this.recipe.totalIngredients.push(carbsSum);
      console.log(totalCarbs)
      console.log(this.recipe.totalIngredients)
    }
  }
  addTotalFats() {
    if (this.recipe.fats.length > 0) {
      console.log('carbs available')
      var totalFats = 0;
      this.recipe.fats.forEach((data) => {
        console.log(data);
        totalFats += data.grams
      })
      var fatsSum = {
        totalFats: totalFats
      }
      this.recipe.totalIngredients.push(fatsSum);
      console.log(totalFats)
      console.log(this.recipe.totalIngredients)
    }
  }
  addTotalVegetables() {
    if (this.recipe.vegetables.length > 0) {
      console.log('carbs available')
      var totalVeges = 0;
      this.recipe.vegetables.forEach((data) => {
        console.log(data);
        totalVeges += data.grams
      })
      var vegesSum = {
        totalVegetables: totalVeges
      }
      this.recipe.totalIngredients.push(vegesSum);
      console.log(totalVeges)
      console.log(this.recipe.totalIngredients)
    }
  }
  addTotalProteins() {
    if (this.recipe.protein.length > 0) {
      console.log('carbs available')
      var totalProteins = 0;
      this.recipe.protein.forEach((data) => {
        console.log(data);
        totalProteins += data.grams
      })
      var proteinSum = {
        totalProtein: totalProteins
      }
      this.recipe.totalIngredients.push(proteinSum);
      console.log(totalProteins)
      console.log(this.recipe.totalIngredients)
    }
  }
  addTotalFruits() {
    if (this.recipe.fruits.length > 0) {
      console.log('carbs available')
      var totalFruits = 0;
      this.recipe.fruits.forEach((data) => {
        console.log(data);
        totalFruits += data.grams
      })
      var fruitsSum = {
        totalFruits: totalFruits
      }
      this.recipe.totalIngredients.push(fruitsSum);
      console.log(totalFruits)
      console.log(this.recipe.totalIngredients)
    }
  }
  addTotalHerbs() {
    if (this.recipe.herbs.length > 0) {
      console.log('carbs available')
      var totalHerbs = 0;
      this.recipe.herbs.forEach((data) => {
        console.log(data);
        totalHerbs += data.grams
      })
      var herbsSum = {
        totalHerbs: totalHerbs
      }
      this.recipe.totalIngredients.push(herbsSum);
      console.log(totalHerbs)
      console.log(this.recipe.totalIngredients)
    }
  }
  addTotalAlcoholicBeverages() {
    if (this.recipe.alcogolicBeverages.length > 0) {
      console.log('carbs available')
      var totalAlcogolicBeverages = 0;
      this.recipe.alcogolicBeverages.forEach((data) => {
        console.log(data);
        totalAlcogolicBeverages += data.grams
      })
      var totalAlcogolicBeveragesSum = {
        totalAlcogolicBeverages: totalAlcogolicBeverages
      }
      this.recipe.totalIngredients.push(totalAlcogolicBeveragesSum);
      console.log(totalAlcogolicBeveragesSum)
      console.log(this.recipe.totalIngredients)
    }
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
      console.log("Meal from false:",this.recipe.mealType)
    }
  }

  addRecipeType(meal) {
    console.log(meal)
    let check = this.recipe.recipeType.includes(meal);
    // console.log("Check:",check)
    if (check === true) {
      this.recipe.recipeType = this.recipe.recipeType.filter(ele => ele != meal);
      // console.log("Meal from True:",this.recipe.recipeType);
    } else {
      this.recipe.recipeType.push(meal);
      // console.log("Meal from false:",this.recipe.recipeType)
    }
  }

  addSpecification(spec) {
    let check = this.recipe.specification.includes(spec);
    if (check === true) {
      this.recipe.specification = this.recipe.specification.filter(ele => ele != spec);
    } else {
      this.recipe.specification.push(spec);
    }
  }

  addCarb(form: NgForm) {
    // console.log(this.carb)
    let check = this.recipe.carbs.some(ele => ele.ingredient._id == this.carb.ingredient._id);
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

  addfruit(form: NgForm) {
    // console.log(this.fruit)
    let check = this.recipe.fruits.some(ele => ele.ingredient._id == this.fruit.ingredient._id);
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
  addvegetable(form: NgForm) {
    // console.log(this.vegetable)
    let check = this.recipe.vegetables.some(ele => ele.ingredient._id == this.vegetable.ingredient._id);
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
  addherb(form: NgForm) {
    // console.log(this.herb)
    let check = this.recipe.herbs.some(ele => ele.ingredient._id == this.herb.ingredient._id);
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
  addprotein(form: NgForm) {
    // console.log(this.protein)
    let check = this.recipe.protein.some(ele => ele.ingredient._id == this.prot.ingredient._id);
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
  addfat(form: NgForm) {
    // console.log(this.fat)
    let check = this.recipe.fats.some(ele => ele.ingredient._id == this.fat.ingredient._id);
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

  addAlcoholicBeverage(form: NgForm) {
    // console.log(this.fat)
    let check = this.recipe.alcogolicBeverages.some(ele => ele.ingredient._id == this.alcoholicBeverage.ingredient._id);
    console.log("Check:", check)
    if (check === true) {
      this.toastr.info("Already Added!", 'Error!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      //  console.log("Fat from true:",this.recipe.fats)
    } else {
      let totalkCal = this.alcoholicBeverage.grams * this.alcoholicBeverage.ingredient.value;
      this.alcoholicBeverage.kCal = totalkCal;
      this.recipe.alcogolicBeverages.push(this.alcoholicBeverage);
      this.alcoholicBeverage = {};
      // console.log("Fat from false:",this.recipe.fats)
    }
  }

  addNonAlcoholicDrink(form: NgForm) {
    // console.log(this.fat)
    let check = this.recipe.nonAlcoholicDrinks.some(ele => ele.ingredient._id == this.nonAlcoholicBeverage.ingredient._id);
    console.log("Check:", check)
    if (check === true) {
      this.toastr.info("Already Added!", 'Error!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      //  console.log("Fat from true:",this.recipe.fats)
    } else {
      let totalkCal = this.nonAlcoholicBeverage.grams * this.nonAlcoholicBeverage.ingredient.value;
      this.nonAlcoholicBeverage.kCal = totalkCal;
      this.recipe.nonAlcoholicDrinks.push(this.nonAlcoholicBeverage);
      this.nonAlcoholicBeverage = {};
      // console.log("Fat from false:",this.recipe.fats)
    }
  }

  addComposedMeal(form: NgForm) {
    // console.log(this.fat)
    let check = this.recipe.composedMeals.some(ele => ele.ingredient._id == this.composedMeal.ingredient._id);
    console.log("Check:", check)
    if (check === true) {
      this.toastr.info("Already Added!", 'Error!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      //  console.log("Fat from true:",this.recipe.fats)
    } else {
      let totalkCal = this.composedMeal.grams * this.composedMeal.ingredient.value;
      this.composedMeal.kCal = totalkCal;
      this.recipe.composedMeals.push(this.composedMeal);
      this.composedMeal = {};
      // console.log("Fat from false:",this.recipe.fats)
    }
  }

}
