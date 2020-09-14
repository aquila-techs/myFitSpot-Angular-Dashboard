import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) { }


  createWorkout(body, file: File): Observable<any> {

    let formData = new FormData();
    formData.append("img", file);
    formData.append("nameEn", body.nameEn);
    formData.append("nameNl", body.nameNl);
    formData.append("descriptionEn", body.descriptionEn);
    formData.append("descriptionNl", body.descriptionNl);
    formData.append("difficulityLevel", body.difficulityLevel);
    formData.append("videoUrl", body.videoUrl);
    formData.append("workoutUrl", body.workoutUrl);
    formData.append("time", body.time);
    formData.append("type", body.type);
    formData.append("muscleGroup", body.muscleGroup);
    formData.append("specification", body.specification);
    formData.append("sweatFactor", body.sweatFactor);
    formData.append("categories", JSON.stringify(body['categories']));
    formData.append("equipment", JSON.stringify(body['equipment']));
    return this.http.post("/workout/create", formData);
  }

  getAllUserWorkouts(body): Observable<any> {
    return this.http.post("/workout/get/user", body);
  }

  deleteWorkout(param): Observable<any> {
    return this.http.delete("/workout/" + param);
  }

}
