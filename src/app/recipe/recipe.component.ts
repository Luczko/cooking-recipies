import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe$: Observable<Recipe[]>;
  singleRecipe: Recipe;
  single: any;
  constructor(private http: RecipeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    const test = this.http.getRecipiesByName(name);

    test
      .pipe(
        // tap(console.log),
        map((e) => e.meals)
      )
      .subscribe((e: Recipe[]) => (this.singleRecipe = e[0]));
  }
}
