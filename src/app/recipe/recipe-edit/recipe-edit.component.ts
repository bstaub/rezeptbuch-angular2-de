import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;  // reactive form, wird in html ==> <form [formGroup]="recipeForm"> gebunden!

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'imagePath': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'ingredients': new FormArray([
        // new FormGroup({
        //   'name': new FormControl(null, Validators.required),
        //   'amount': new FormControl(null, Validators.required),
        // })
      ]),

    });
  }

  onSubmit() {
    const newRecipe = this.recipeForm.value;  // auf values zugreifen (recipe modell muss dann gleich wie reactive form values benannt sein, oder mit new erstellen
    this.recipeService.addRecipe(newRecipe);
  }

}
