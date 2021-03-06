import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/Ingredient.modal';


export class ShoppingListService{
ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomatos',4)
  ];

  getIngredients(){
    return(this.ingredients.slice());
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
