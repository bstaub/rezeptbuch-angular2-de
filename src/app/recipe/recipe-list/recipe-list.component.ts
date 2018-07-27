import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Incredient} from '../../shared/incredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  // recipe = new Recipe('Mac Dummy', 'Mac Artikel Beschreib', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-rEP6qXPLfXwMg3tSGcx0A_ZlfDa21XmcT-aKAbX0jA9P2Zyciw' );
  recipes: Recipe[] = [
    new Recipe(
      'Salat',
      'Hier ein feiner Salat',
      'https://image.brigitte.de/10322576/large1x1-306-306/e080b0b600d54b63bba4573db6d7af50/Fy/salat-mit-orangen-buchweizen-und-feta-t.jpg',
      [
        new Incredient('Gurken', 10),
        new Incredient('Ruebli', 5)
      ]
    ),
    new Recipe('Mac Dummy', 'Mac Artikel Beschreib, gehört nicht zum Kochen, Smile', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-rEP6qXPLfXwMg3tSGcx0A_ZlfDa21XmcT-aKAbX0jA9P2Zyciw', [] ),
    new Recipe('Salat mit Tomaten', 'Gesunder Salat', 'https://images.ichkoche.at/data/image/variations/365x283/1/rucola-tomaten-salat-img-1309.jpg', [] ),
    new Recipe('Toast Spezial', 'ein feines Toast', 'https://images.ichkoche.at/data/image/variations/496x384/5/default-img-43099.jpg', [] ),
  ];

  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe) {  // 3. onSelected wird ausgeführt, wo ich das rezept von item über recipe-list durchgereicht bekomme..
    this.recipeSelected.emit(recipe);  // 4. nochmals event mit recipe zu emitten und an parent zu schicken
  }

}
