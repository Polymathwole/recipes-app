import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscriptn: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('shoppingEditForm') seForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnDestroy() {
    this.subscriptn.unsubscribe();
  }

  ngOnInit() {
    this.subscriptn = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.seForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  onClear() {
    this.seForm.reset();
  }

  onDelete(form: NgForm) {
    const values = form.value;
    this.shoppingListService.deleteItem(this.editedItemIndex, values.name);
    this.editMode = false;
    this.seForm.reset();
  }

  onSub(form: NgForm) {
    const values = form.value;
    const newIngredient = new Ingredient(values.name, parseInt(values.amount, 10));

    if (this.editMode) {
      this.shoppingListService.updateIngreditent(this.editedItemIndex, newIngredient);
      this.editMode = false;
    } else {
      this.shoppingListService.addItem(newIngredient);
    }

    this.seForm.reset();
  }
}
