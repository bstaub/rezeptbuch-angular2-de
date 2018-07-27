import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {  }

  ngOnInit() {  // Aufgaben die etwas länger dauern könnten nicht in constructor, sondern in ngOnInit reintun!!!
    this.recipes = this.recipeService.getRecipes();
  }

}
