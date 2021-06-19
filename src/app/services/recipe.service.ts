import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, CategoryResponse } from '../models/category';
import { Recipies, RecipiesResponse } from '../models/recipies';
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
  }

  getRecipiesByCategory(category: string): Observable<RecipiesResponse> {
    return this.http.get<RecipiesResponse>(
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category
    );
  }

  getRecipiesByName(name: string): Observable<RecipiesResponse> {
    return this.http.get<RecipiesResponse>(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=' + name
    );
  }
}
