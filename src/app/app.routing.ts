import {RouterModule, Routes} from '@angular/router';

import {RecipeComponent} from './recipe/recipe.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RECIPE_ROUTES} from './recipe/recipe.routes';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/rezepte', pathMatch: 'full'},
  {path: 'rezepte', component: RecipeComponent, children: RECIPE_ROUTES},
  {path: 'einkaufsliste', component: ShoppingListComponent},
  {path: '**', redirectTo: '/'},  // default Route, könnte auch 404 Seite sein, muss am Schluss aufgerufen werden
];

export const MyRouting = RouterModule.forRoot(APP_ROUTES);
