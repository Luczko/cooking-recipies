import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipies } from '../models/recipies';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  constructor(private http: RecipeService, private route: ActivatedRoute) {}
  recipies$: Observable<Recipies[]>;

  ngOnInit(): void {
    const category = this.route.snapshot.paramMap.get('category');
    const test = this.http.getRecipiesByCategory(category);

    this.recipies$ = test.pipe(map((e) => e.meals));
  }
}
