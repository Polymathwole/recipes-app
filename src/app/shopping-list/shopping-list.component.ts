import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

  onNewItemAdded(data: {name: string, amount: number}) {
    this.ingredients.push(new Ingredient(data.name, data.amount));
  }
}
