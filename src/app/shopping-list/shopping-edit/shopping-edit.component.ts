import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  addIngredient(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.shoppingListService.addIngredient(new Ingredient(form.value.name, form.value.amount));
    // form.resetForm();
  }

}
