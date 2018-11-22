import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToList(name: HTMLInputElement, amount: HTMLInputElement, evt: Event) {
    evt.preventDefault();
    this.shoppingListService.addItem(new Ingredient(name.value, parseInt(amount.value, 10)));
  }
}
