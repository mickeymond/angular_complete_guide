import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  ingredientsListener = new EventEmitter<Ingredient[]>();

  getIngredients() {
    this.ingredientsListener.emit([...this.ingredients]);
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsListener.emit([...this.ingredients]);
  }
}
