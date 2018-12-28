import { Component, OnInit, OnDestroy } from '@angular/core';
import {Recipe} from '../../models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnDestroy, OnInit {
  recipes: Recipe[];
  subscriptn: Subscription;

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnDestroy() {
    this.subscriptn.unsubscribe();
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscriptn = this.recipeService.recipeChanged.subscribe(() => {
      this.recipes = this.recipeService.getRecipes();
    });
  }

  onNewRecipe() {
    this.router.navigate(['/recipes', 'new']);
  }
}
