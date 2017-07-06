import { Component, OnInit,ViewChild,EventEmitter,Output, ElementRef } from '@angular/core';
import {ingredient} from '../../shared/ingredient.model'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('nameInput') nameI:ElementRef;
	@ViewChild('amountInput') amountI:ElementRef;
	@Output() addIngredient=new EventEmitter<ingredient>();
  constructor() { }

  ngOnInit() {
  }

	onAdd(){
		this.addIngredient.emit(new ingredient(this.nameI.nativeElement.value,this.amountI.nativeElement.value));
	}
}
