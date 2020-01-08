import { Ingredient } from './../shared/Ingredient.modal';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.servicer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[];
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientChanged.subscribe(
      (ingredients:Ingredient[]) => this.ingredients = ingredients
    );
  }

}
