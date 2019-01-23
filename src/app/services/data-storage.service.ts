import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from './recipe.service';
import { Recipe } from '../models/recipe.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-6ca7a.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
   this.http.get('https://ng-recipe-book-6ca7a.firebaseio.com/recipes.json')
    .pipe(map(
      res => {
        const recips: Recipe[] = res.json();

        for (const r of recips) {
          if (!r.ingredients) {
            r.ingredients = [];
          }
        }
        return recips;
      }
    ))
    .subscribe( recipes => {
      this.recipeService.setRecipes(recipes);
    });
  }
}
