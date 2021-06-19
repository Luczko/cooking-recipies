import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Country } from '../models/country';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  constructor(private http: RecipeService) {}
  countries$: Observable<Country[]>;

  ngOnInit(): void {
    const test = this.http.getCountries();

    this.countries$ = test.pipe(
      tap(console.log),
      map((e) => e.meals)
    );
  }
}
