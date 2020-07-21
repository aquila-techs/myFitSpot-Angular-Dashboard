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

  createRecipe(body): Observable<any> {
    return this.http.post("/recipe/create",body);
  }

  getUserRecipes(body): Observable<any> {
    return this.http.post("/recipe/get/user/recipes",body);
  }

  deleteUserRecipes(param): Observable<any> {
    return this.http.delete("/recipe/"+param);
  }

}
