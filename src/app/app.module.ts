import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeService } from './recipes/recipes.service';
import { ServerService } from './server.service';
import { AuthService } from './auth/auth.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
		HeaderComponent,
		HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
		AppRoutingModule,
		SharedModule,
		AuthModule
  ],
  providers: [ShoppingListService,RecipeService,ServerService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
