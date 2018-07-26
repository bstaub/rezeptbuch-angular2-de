import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipe = new Recipe('Mac Dummy', 'Mac Artikel Beschreib', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-rEP6qXPLfXwMg3tSGcx0A_ZlfDa21XmcT-aKAbX0jA9P2Zyciw' );
  constructor() { }

  ngOnInit() {
  }

}
