import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeService } from "../services/recipe.service";
import { ToastrService } from 'ngx-toastr';
import { environment } from "src/environments/environment";
import { NgbModal,ModalDismissReasons,NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RecipeDetailComponent implements OnInit {

  dropdownSettings = {};
  
  recipe;
  imgUrl = environment.imgUrl;
  carbs = [];
  protein = [];
  fats = [];
  fruits = [];
  vegetables = [];
  herbs = [];
  carb = {} as any;
  fruit = {} as any;
  prot = {} as any;
  fat = {} as any;
  vegetable = {} as any;
  herb = {} as any;
  searchField = "";
  search = []
  constructor(private modalService: NgbModal, private router: Router, private actRoute: ActivatedRoute, private recipeS: RecipeService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.recipeS.getSingleRecipe(this.actRoute.snapshot.params.recipeId).subscribe(res => {
      if (res.status == true) {
        this.recipe = res.data;
        // console.log(this.recipe);
      }
    })

    this.recipeS.getAllCarbs().subscribe(res => {
      if (res.status === true) {
        this.carbs = res.data
        console.log(this.carbs)
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

    this.dropdownSettings = {
      singleSelection: false,
      idField:'_id',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      limitSelection: 1,
      closeDropDownOnSelection: true
    };

  }


  EditCarbs(editCarb) {
    // this.carbs = (this.recipe.carbs)?this.recipe.carbs:[];
    console.log("carbs Array",this.carbs)
    this.modalService.open(editCarb, { windowClass: "dark-modal", size: 'lg' });
  }

  SearchCarbs(e) {
    console.log(e.target.value)
    const val = e.target.value;
    const temp = this.carbs.filter(d => {
      return d.nameEn.indexOf(val) != -1 || !val;
    });
    console.log(temp)
    console.log(this.searchField)
    // update the rows
    this.search = temp;
    // console.log(this.carbs)


    
  }

  selectedCarb(c) {
    console.log("Selected Carb",c);
  }

  toggle() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  onItemSelect(item: any) {
    console.log(item);
  //  console.log  (this.partnersData.find(e=>{ return e.name == item}))
    // const partner = this.partnersData.find(e => { return e.name == item })
    // this.user.referBy = partner._id;
  }

  onItemDeSelect(item: any) {
    
  }

  addCarb() {
    console.log(this.carb)
  //   let check = this.carbs.some(ele =>ele.ingredient._id == this.carb.ingredient._id);
  //   console.log("Check:",check)
  //   if (check === true) {
  //     this.toastr.info("Already Added!", 'Error!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
  //     //  console.log("Carb from true:",this.recipe.carbs) 
  //   } else {
  //     let totalkCal = this.carb.grams * this.carb.ingredient.value;
  //     this.carb.kCal = totalkCal;
  //     this.recipe.carbs.push(this.carb);
  //     this.carb = {};
  //     // console.log("Carb from false:",this.recipe.carbs)
  //  } 
  }

}
