import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
  // providers: []
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe((r: Recipe) => {
    //   this.selectedRecipe = r;
    // });
  }

}
