import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.modal';
import { RecipeServie } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeServie]
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe;
  constructor(private recipeService:RecipeServie) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe = recipe
      }
    );
  }

}
