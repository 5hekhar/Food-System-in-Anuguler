import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from './../../shared/Ingredient.modal';
import { ShoppingListService } from './../shopping-list.servicer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName', { static: true }) nameInputRef: ElementRef;
  @ViewChild('inputAmount', { static: true }) amountInputRef: ElementRef;
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }

}
