import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  recipeId: number;

  constructor(private recipeService: RecipeService,
              private shoppingListServce: ShoppingListService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() { // zieh das aus URL ist alles Text mit + mache ich wieder number draus
    this.activatedRoute.params.subscribe(
      params => {
        this.recipeId = +params['id']
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeId);
      }
    );
  }

  onAddToList() {
    this.shoppingListServce.addIncredients(this.selectedRecipe.incredients);
  }

  onEdit() {
    this.router.navigate(['/rezepte', this.recipeId, 'bearbeiten']); // Full Path muss übergeben werden!
  }

}
