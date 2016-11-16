import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }   from './app.component';

import { SharedModule } from './shared';
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {RecipeItemComponent} from "./recipes/recipe-list/recipe-item.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {DataService} from "./core/services/data.services";

@NgModule({
	imports: [
		FormsModule,
		HttpModule,
		BrowserModule,		
		SharedModule,
		routing
	],
	declarations: [
		AppComponent,
		RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent
	],
	providers: [
		appRoutingProviders,
		DataService
	], 
	exports: [],
	bootstrap: [AppComponent],
})

export class AppModule {}
