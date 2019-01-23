import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../model/recipe';

@Component({
  selector: 'app-recipee-list',
  templateUrl: './recipee-list.component.html',
  styleUrls: ['./recipee-list.component.css']
})
export class RecipeeListComponent {

  recipes: Recipe[];
  recipe_in_progress: Recipe;

  constructor() {
    this.recipe_in_progress = Recipe.createBlank();

    this.recipes = [
      new Recipe('Banana Bread', 'This is my favorite banana bread recipe!', 9, 60, null, null, null),
      new Recipe('Homestead Tofu', 'Special recipe from china', 4, 30, null, null, null)
    ];
  }

  public addRecipeClicked() {
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
    this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createBlank();
  }

}
