import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipesService: RecipesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipesService.selectedRecipe.subscribe(
      (recipe: Recipe) => {
        // console.log(recipe);
        this.recipe = recipe;
      }
    );

    this.route.paramMap.subscribe(
      (paramMap: ParamMap) => {
        // console.log(paramMap);
        this.recipesService.getRecipe(Number(paramMap.get('id')));
      }
    );
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(ingredient => {
      this.shoppingListService.addIngredient(ingredient);
    });
  }
}
