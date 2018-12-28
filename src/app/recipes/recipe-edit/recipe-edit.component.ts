import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  allowEdit = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeServe: RecipeService,
    private router: Router
    ) { }

  getCtrls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);

    if (this.allowEdit) {
      const recipe = this.recipeServe.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe.ingredients) {
        recipe.ingredients.map(i => {
          recipeIngredients.push(new FormGroup({
            name: new FormControl(i.name, Validators.required),
            amount: new FormControl(i.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        });
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    });
  }

  ngOnInit() {
    this.route.params.subscribe(
      (p) => {
        this.id = +p.id;
        this.allowEdit = p.id != null;
        this.initForm();
      }
    );
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      }));
  }

  onCancel() {
    this.router.navigate(['../'],{relativeTo: this.route})
  }

  onDeleteIngredient(i: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
  }

  onSub() {
    // console.log(this.recipeForm);
    const formValues = this.recipeForm.value;
    const newRecipe: Recipe = new Recipe(formValues.name, formValues.description, formValues.imagePath, formValues.ingredients);

    if (this.allowEdit) {
      this.recipeServe.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeServe.addRecipe(newRecipe);
    }

    this.onCancel();
  }
}
