import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;  // reactive form, wird in html ==> <form [formGroup]="recipeForm"> gebunden!
  private recipeIndex: number;
  private subscription: Subscription;
  private isNew = true;
  private recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        if (params.hasOwnProperty('id')) {  // prüfen, haben wir einen id paramenter, wenn ja....
          this.isNew = false;  // wird also editiert
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        } else {
          this.isNew = true;
          this.recipe = null;
        }
      }
    );

    let recipeName = null;
    let recipeImagePath = null;
    let recipeDescription = null;
    let recipeIngredients = new FormArray([]);

    if (!this.isNew) {
      if (this.recipe.hasOwnProperty('incredients')) {
        for (const incredient of this.recipe.incredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(incredient.name, Validators.required),
              'amount': new FormControl(incredient.amount, Validators.required)
            })
          );
        }
      }
      recipeName = this.recipe.name;
      recipeImagePath = this.recipe.imagePath;
      recipeDescription = this.recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'incredients': recipeIngredients
      // 'incredients': new FormArray([
      //   // new FormGroup({
      //   //   'name': new FormControl(null, Validators.required),
      //   //   'amount': new FormControl(null, Validators.required),
      //   // })
      // ])
    });
  }

  onSubmit() {
    const newRecipe = this.recipeForm.value;  // auf values zugreifen (recipe modell muss dann gleich wie reactive form values benannt sein, oder mit new erstellen
    this.recipeService.addRecipe(newRecipe);
    this.onNavigateBack();
  }

  onCancel() {
    this.onNavigateBack();
  }

  onNavigateBack() {
    this.router.navigate(['/']);
  }

  onAddIngredientControl(name: string, amount: string) {
    (<FormArray>this.recipeForm.get('incredients')).push(
      new FormGroup({
        'name': new FormControl(name, Validators.required),
        'amount': new FormControl(amount, Validators.required)
      })
    );
  }

  onRemoveIngredientControl(index: number) {
    (<FormArray>this.recipeForm.get('incredients')).removeAt(index);  // removeAt ist Angular2 methode
  }

}
