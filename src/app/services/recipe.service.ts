import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { Recipies } from '../models/recipies';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
  }

  getRecipiesByCategory(category: string): Observable<Recipies[]> {
    return this.http.get<Recipies[]>(
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category
    );
  }
}
