import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('1st recipe', 'This is the 1st recipe', 'https://media.defense.gov/2018/Jul/23/2001945968/780/780/0/180717-F-YE685-1062.JPG'),
    new Recipe('2nd recipe', 'This is the 2nd recipe', 'https://media.defense.gov/2018/Jul/23/2001945968/780/780/0/180717-F-YE685-1062.JPG'),
    new Recipe('3rd recipe', 'This is the 3rd recipe', 'https://media.defense.gov/2018/Jul/23/2001945968/780/780/0/180717-F-YE685-1062.JPG')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
