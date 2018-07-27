import {Recipe} from './recipe.model';
import {Incredient} from '../shared/incredient.model';

export class RecipeService {
  private recipes: Recipe[] = [
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

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
  }

}
