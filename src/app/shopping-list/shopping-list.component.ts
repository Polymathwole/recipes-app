import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnDestroy, OnInit {
  ingredients: Ingredient[] ;
  private subscriptn: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnDestroy() {
    this.subscriptn.unsubscribe();
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscriptn = this.shoppingListService.itemAdded.subscribe(() => {
      this.ingredients = this.shoppingListService.getIngredients();
    });
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
