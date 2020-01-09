import { ShoppingListService } from './../shopping-list/shopping-list.servicer';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';
import { Ingredient } from '../shared/Ingredient.modal';

@Injectable()
export class RecipeServie {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Lamin Rice',
      'This is Rice a test',
      'https://c1.peakpx.com/wallpaper/400/456/943/dishes-kitchen-bio-food-recipe-wallpaper-preview.jpg',
      [
        new Ingredient('Meet', 1),
        new Ingredient('Franch Fries', 20),
      ]
    ),
    new Recipe(
      'Samosa',
      'This is Noodal a test',
      'https://c1.peakpx.com/wallpaper/400/456/943/dishes-kitchen-bio-food-recipe-wallpaper-preview.jpg',
      [
        new Ingredient('Salid', 1),
        new Ingredient('Watter', 20),
      ]
    )
  ];

  constructor(private slService:ShoppingListService){}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index:number){
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredient:Ingredient[]){
    this.slService.addIngredients(ingredient);
  }
}
