import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from '../services/recipe.service';
import { Category } from '../models/category';
import {
  catchError,
  delayWhen,
  map,
  retryWhen,
  shareReplay,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
})
export class RecipiesComponent implements OnInit {
  categories$: Observable<Category[]>;
  constructor(private http: RecipeService) {}

  // showRecipies(): void {
  //   this.http
  //     .getCategories()
  //     .subscribe((data: Category[]) => (this.categories = { ...data }));
  // }

  ngOnInit(): void {
    const test = this.http.getCategories();

    this.categories$ = test.pipe(
      tap(console.log),
      map((e) => e.categories)
    );
  }
}
