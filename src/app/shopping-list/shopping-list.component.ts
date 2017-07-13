import { Component, OnInit,OnDestroy } from '@angular/core';
import {ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
	private subs:Subscription;
	ingredients:ingredient[]=[];
  constructor(private shopListService:ShoppingListService) { }

  ngOnInit() {
		this.ingredients=this.shopListService.getIngArr();
		this.subs=this.shopListService.addIngredient.subscribe((ingr:ingredient)=>{
			this.ingredients.push(ingr);
		});
  }
	
	ngOnDestroy(){
		this.subs.unsubscribe();
	}

}
