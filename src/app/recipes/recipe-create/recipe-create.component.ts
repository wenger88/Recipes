/**
 * Created by goran.pavlovski on 11/17/2016.
 */

import {Component, OnInit} from "@angular/core";
import {IRecipe} from "../interfaces";

@Component({
    selector: 'recipe-create',
    template: require('./recipe-create.component.html'),
    styles: [require('./recipe-create.component.scss')]
})

export class RecipeCreateComponent implements OnInit{

    recipe = <IRecipe>{
        ingredients: [],
        directions: []
    }

    constructor(){}

    ngOnInit(){
        this.recipe = null;
    }

}