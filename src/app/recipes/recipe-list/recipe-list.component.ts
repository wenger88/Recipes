/**
 * Created by goran.pavlovski on 11/16/2016.
 */

import {Component, EventEmitter, Output, OnInit} from "@angular/core";
import {IRecipe} from "../interfaces";
import {DataService} from "../../core/services/data.services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'recipe-list',
    template: require('./recipe-list.component.html'),
    styles: [require('./recipe-list.component.scss')]
})

export class RecipeListComponent implements OnInit{

    recipes: IRecipe[];

    constructor(private dataService: DataService, private router: Router){}

    ngOnInit(){
        this.dataService.GetAll()
            .subscribe((recipes: IRecipe[]) => {
                this.recipes = recipes;
            })
    }

}