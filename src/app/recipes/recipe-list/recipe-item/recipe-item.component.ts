import { Component, OnInit,Input} from '@angular/core';
import { Recipe } from './../../recipe.modal';
import { RecipeServie } from './../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeServie:RecipeServie) { }

  ngOnInit() {
  }
  onSelected(){
    this.recipeServie.recipeSelected.emit(this.recipe);
  }

}
