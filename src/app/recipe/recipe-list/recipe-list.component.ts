import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Mac Dummy', 'Mac Artikel Beschreib', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-rEP6qXPLfXwMg3tSGcx0A_ZlfDa21XmcT-aKAbX0jA9P2Zyciw' );

  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe) {  // 3. onSelected wird ausgeführt, wo ich das rezept von item über recipe-list durchgereicht bekomme..
    this.recipeSelected.emit(recipe);  // 4. nochmals event mit recipe zu emitten und an parent zu schicken
  }

}
