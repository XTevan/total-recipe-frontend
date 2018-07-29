import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private readonly host : string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return {
      "Content-Type": "application/json"
    }
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.host}/recipe`, {
      headers: this.getHeaders()
    })
  }

  getRecipe(id: number) : Observable<Recipe> {
    return this.http.get<Recipe>(`${this.host}/recipe/${id}`, {
      headers: this.getHeaders()
    })
  }
}
