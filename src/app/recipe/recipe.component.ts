import {Component, OnInit} from '@angular/core';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styles: [],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
