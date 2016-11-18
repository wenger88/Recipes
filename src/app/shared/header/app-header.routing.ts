import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesComponent} from "../../recipes/recipes.component";
import {RecipeDetailComponent} from "../../recipes/recipe-detail/recipe-detail.component";

const appHeaderRoutes: Routes = [
	{
		path: 'recipes',
		component: RecipesComponent,
        children: [
            {
                path: ':id',
                component: RecipeDetailComponent
            }
        ]
	},
/*	{
		path: ':id',
		component: RecipeDetailComponent
	},*/
	{
		path: '',
		redirectTo: '/recipes',
		pathMatch: 'full'
	}
];

export const appHeaderRouting: ModuleWithProviders = RouterModule.forChild(appHeaderRoutes);