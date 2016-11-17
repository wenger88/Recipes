import {Routes} from "@angular/router";
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
/**
 * Created by goran.pavlovski on 11/17/2016.
 */

export const RECIPE_ROUTES: Routes = [
    {
        path: '',
        component: RecipeStartComponent
    },
    {
        path: ':id',
        component: RecipeDetailComponent
    },
    {
        path: ':id/edit',
        component: RecipeEditComponent
    }
];