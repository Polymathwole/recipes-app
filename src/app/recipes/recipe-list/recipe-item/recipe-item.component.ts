import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() ind: number;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  // onSelected() {
  //   // this.recipeService.recipeSelected.emit(this.recipe);
  //   this.router.navigate(['/recipes', this.ind]);
  // }
}
