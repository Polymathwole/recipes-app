import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newAdd = new EventEmitter<{name: string, amount: number}>();

  constructor() { }

  ngOnInit() {
  }

  onAddToList(name: HTMLInputElement, amount: HTMLInputElement, evt: Event) {
    evt.preventDefault();
    this.newAdd.emit({name: name.value, amount: parseInt(amount.value, 10)});
  }
}
