import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  recipeId: number;

  private subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private shoppingListServce: ShoppingListService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) { }

  onAddToList() {
    this.shoppingListServce.addIncredients(this.selectedRecipe.incredients);
  }

  onEdit() {
    this.router.navigate(['/rezepte', this.recipeId, 'bearbeiten']); // Full Path muss übergeben werden!
  }

  onDelete() {
    this.router.navigate(['/rezepte']);
    this.recipeService.deleteRecipe(this.recipeId);
  }

  ngOnInit() { // zieh das aus URL ist alles Text mit + mache ich wieder number draus
    this.subscription = this.activatedRoute.params.subscribe(
      params => {
        this.recipeId = +params['id']
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeId);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
