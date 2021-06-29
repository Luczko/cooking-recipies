import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Recipies } from '../models/recipies';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  recipies$: Observable<Recipies[]>;
  constructor(private http: RecipeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const category = this.route.snapshot.paramMap.get('category');
    const test = this.http.getRecipiesByCategory(category);

    this.recipies$ = test.pipe(
      // tap(console.log),
      map((e) => e.meals)
    );
  }
}
