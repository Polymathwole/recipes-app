import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'Lovely Schnitzels!', 'https://media.defense.gov/2018/Jul/23/2001945968/780/780/0/180717-F-YE685-1062.JPG', [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe('Burger', 'Tasty burgers!', 'https://media.defense.gov/2018/Jul/23/2001945968/780/780/0/180717-F-YE685-1062.JPG', [new Ingredient('Buns', 2), new Ingredient('Meat', 2)]),
    new Recipe('Beans with plantain', 'What a combo!', 'https://media.defense.gov/2018/Jul/23/2001945968/780/780/0/180717-F-YE685-1062.JPG', [new Ingredient('Beans', 100), new Ingredient('Plantain', 10)])
  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slServ: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addToShoppingList(i: Ingredient[]) {
    this.slServ.addItems(i);
  }
}
