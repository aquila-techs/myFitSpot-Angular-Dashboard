import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getAllCarbs(): Observable<any> {
    return this.http.get("/ingredient/all/carbs");
  }
  getAllfats(): Observable<any> {
    return this.http.get("/ingredient/all/fats");
  }
  getAllFruits(): Observable<any> {
    return this.http.get("/ingredient/all/fruits");
  }
  getAllProtein(): Observable<any> {
    return this.http.get("/ingredient/all/protein");
  }
  getAllVegetables(): Observable<any> {
    return this.http.get("/ingredient/all/vegetables");
  }
  getAllHerbs(): Observable<any> {
    return this.http.get("/ingredient/all/herbs");
  }

  createRecipe(body, file: File): Observable<any> {

    let formData = new FormData();
    formData.append("img", file);
    formData.append("nameEn", body.nameEn);
    formData.append("nameNl", body.nameNl);
    formData.append("recipeEn", body.recipeEn);
    formData.append("recipeNl", body.recipeNl);
    formData.append("recipeUrl", body.recipeUrl);
    formData.append("videoUrl", body.videoUrl);
    formData.append("specification", JSON.stringify(body['specification']));
    formData.append("mealType", JSON.stringify(body['mealType']));
    formData.append("recipeType", JSON.stringify(body['recipeType']));
    formData.append("carbs", JSON.stringify(body['carbs']));
    formData.append("fats", JSON.stringify(body['fats']));
    formData.append("fruits", JSON.stringify(body['fruits']));
    formData.append("herbs", JSON.stringify(body['herbs']));
    formData.append("vegetables", JSON.stringify(body['vegetables']));
    formData.append("protein", JSON.stringify(body['protein']));
    return this.http.post("/recipe/create",formData);
  }

  getUserRecipes(body): Observable<any> {
    return this.http.post("/recipe/get/user/recipes",body);
  }

  getSingleRecipe(param): Observable<any> {
    return this.http.get("/recipe/"+param);
  }
  deleteUserRecipes(param): Observable<any> {
    return this.http.delete("/recipe/"+param);
  }

}
