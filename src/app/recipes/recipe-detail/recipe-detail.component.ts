import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(ingredient => {
      this.shoppingListService.addIngredient(ingredient);
    });
  }
}
