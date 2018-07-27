import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService,
              private shoppingListServce: ShoppingListService,
              private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.selectedRecipe = this.recipeService.getRecipe(+params['id'])  // zieh das aus URL ist alles Text mit + mache ich wieder number draus
    );
  }

  onAddToList() {
    this.shoppingListServce.addIncredients(this.selectedRecipe.incredients);
  }

}
