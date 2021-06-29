import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
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
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<Category[]>;
  length = false;
  constructor(private http: RecipeService) {}

  // showRecipies(): void {
  //   this.http
  //     .getCategories()
  //     .subscribe((data: Category[]) => (this.categories = { ...data }));
  // }

  changeLength(): void {
    this.length = !this.length;
  }

  ngOnInit(): void {
    const test = this.http.getCategories();

    this.categories$ = test.pipe(
      //  tap(console.log)
      map((e) => e.categories)
    );
  }
}
