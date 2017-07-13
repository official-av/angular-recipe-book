import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('nameInput') nameI:ElementRef;
	@ViewChild('amountInput') amountI:ElementRef;
  constructor(private shopListService:ShoppingListService) { }

  ngOnInit() {
  }

	onAdd(){		this.shopListService.addIngredient.next({name:this.nameI.nativeElement.value,amount:this.amountI.nativeElement.value});
	}
}
