import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    @Output() displayRecipes = new EventEmitter<boolean>();
    @Output() displayShoppingLists = new EventEmitter<boolean>();

    showRecipes() {
        // console.log('Show Recipes');
        this.displayRecipes.emit(true);
        this.displayShoppingLists.emit(false);
    }

    showShoppingLists() {
        // console.log('Show Shopping Lists');
        this.displayShoppingLists.emit(true);
        this.displayRecipes.emit(false);
    }
}