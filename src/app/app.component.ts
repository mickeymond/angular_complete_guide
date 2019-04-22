import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes = true;
  showShoppingLists = false;

  onDisplayRecipes(event) {
    // console.log(event);
    this.showRecipes = event;
  }

  onDisplayShoppingLists(event) {
    // console.log(event);
    this.showShoppingLists = event;
  }
}
