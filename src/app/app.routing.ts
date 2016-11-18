
// no general routes
/*
const appRoutes: Routes = [];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
*/

import {Routes, RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {RECIPE_ROUTES} from "./recipes/recipes.routes";
import {RecipeCreateComponent} from "./recipes/recipe-create/recipe-create.component";

const APP_ROUTES_PROVIDERS: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: RecipesComponent,
        children: RECIPE_ROUTES
    },
    {
        path: 'new',
        component: RecipeCreateComponent
    }

];

export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);