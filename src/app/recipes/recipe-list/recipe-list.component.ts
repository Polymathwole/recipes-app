import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('A recipe', 'This is simply a test', 'https://media.defense.gov/2018/Jul/23/2001945968/780/780/0/180717-F-YE685-1062.JPG'), new Recipe('A recipe', 'This is simply a test', 'https://media.defense.gov/2018/Jul/23/2001945968/780/780/0/180717-F-YE685-1062.JPG'), new Recipe('A recipe', 'This is simply a test', 'https://media.defense.gov/2018/Jul/23/2001945968/780/780/0/180717-F-YE685-1062.JPG')];

  constructor() { }

  ngOnInit() {
  }

}
