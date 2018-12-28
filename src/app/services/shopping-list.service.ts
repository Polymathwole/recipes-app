import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 10)
  ];
  itemAdded = new Subject();
  startedEditing = new Subject<number>();

  addItem(data: Ingredient) {
    this.ingredients.push(data);
    this.itemAdded.next();
  }

  addItems(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.itemAdded.next();
  }

  deleteItem(index: number, sname: string) {
    const ingToDelete = this.ingredients[index];

    if (ingToDelete) {
      if (sname === ingToDelete.name) {
        this.ingredients.splice(index, 1);
      }
    }
    this.itemAdded.next();
  }

  getIngredient(index: number) {
    return this.ingredients.slice()[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  updateIngreditent(index: number, newIngreditent: Ingredient) {
    this.ingredients[index] = newIngreditent;
    this.itemAdded.next();
  }
}
