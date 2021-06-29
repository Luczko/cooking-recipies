import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs/operators';
import { Recipies } from '../models/recipies';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  recipies$: Observable<Recipies[]>;

  @ViewChild('searchInput', { static: true }) input: ElementRef;

  constructor(private http: RecipeService, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.recipies$ = fromEvent<any>(this.input.nativeElement, 'keyup').pipe(
      map((event) => event.target.value),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((search) =>
        this.http.getRecipiesByName(search).pipe(
          // tap(console.log),
          map((e) => e.meals)
        )
      )
    );
  }
}
