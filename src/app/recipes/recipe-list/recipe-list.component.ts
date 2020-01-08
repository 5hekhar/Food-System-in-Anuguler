import { Component, OnInit } from '@angular/core';
import { RecipeServie } from './../recipe.service';
import { Recipe } from './../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService:RecipeServie) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
