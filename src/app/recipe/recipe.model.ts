import {Incredient} from '../shared/incredient.model';

export class Recipe {
  /*
  public name: string;
  public description: string;
  public imagePath: string;
  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
  */
  constructor(public name: string,
              public description: string,
              public imagePath: string,
              public incredients: Incredient[]
  ) {
  }
}
