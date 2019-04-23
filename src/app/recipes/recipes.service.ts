import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'test recipe description 1',
      'assets/img/1.png',
      [
        new Ingredient('Banana', 5),
        new Ingredient('Orange', 4),
        new Ingredient('Pineapple', 3)
      ]
    ),
    new Recipe(
      'Test Recipe 2',
      'test recipe description 2',
      'assets/img/2.png',
      [
        new Ingredient('Apples', 52),
        new Ingredient('Tomatoes', 12),
        new Ingredient('Mangoes', 67)
      ]
    ),
    new Recipe(
      'Test Recipe 3',
      'test recipe description 3',
      'assets/img/3.jpg',
      [
        new Ingredient('Sugar Cane', 5),
        new Ingredient('Honey', 4),
        new Ingredient('Olive Oil', 3)
      ]
    ),
    new Recipe(
      'Test Recipe 4',
      'test recipe description 4',
      'assets/img/4.jpg',
      [
        new Ingredient('Sugar Cane', 5),
        new Ingredient('Honey', 4),
        new Ingredient('Olive Oil', 3)
      ]
    ),
    new Recipe(
      'Test Recipe 5',
      'test recipe description 5',
      'assets/img/5.jpg',
      [
        new Ingredient('Sugar Cane', 5),
        new Ingredient('Honey', 4),
        new Ingredient('Olive Oil', 3)
      ]
    )
  ];

  constructor(private router: Router) {}

  receipesListener = new EventEmitter<Recipe[]>();
  selectedRecipe = new EventEmitter<Recipe>();

  getRecipes() {
    this.receipesListener.emit([...this.recipes]);
  }

  getRecipe(index: number) {
    const recipe = this.recipes[index];
    // console.log(recipe);
    if (recipe) {
      this.selectedRecipe.emit(recipe);
    } else {
      this.router.navigate(['/recipes']);
    }
  }
}
