import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from '../services/recipe.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
})
export class RecipiesComponent implements OnInit {
  categories: Observable<Category[]>;
  constructor(private http: RecipeService) {}

  ngOnInit() {
    this.categories = this.http.getCategories();
    console.log(this.categories);
  }
}
