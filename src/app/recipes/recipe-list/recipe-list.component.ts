import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}

  showDetail(recipe: Recipe) {
    // console.log(recipe);
    this.recipesService.selectedRecipe.emit(recipe);
  }

  ngOnInit() {
    this.recipesService.receipesListener.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );

    this.recipesService.getRecipes();
  }
}
