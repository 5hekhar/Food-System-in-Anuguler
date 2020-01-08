import { RecipeServie } from './../recipe.service';
import { Recipe } from './../recipe.modal';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe;
  constructor(private recipeService:RecipeServie) { }

  ngOnInit() {
  }
  onAddToShoppingList(){
     this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
