/**
 * Created by goran.pavlovski on 11/16/2016.
 */

import {Component, OnInit, OnDestroy} from "@angular/core";
import {IRecipe} from "../interfaces";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";
import {DataService} from "../../core/services/data.services";
import 'rxjs/Rx'
@Component({
    selector: 'recipe-detail',
    template: require('./recipe-detail.component.html'),
    styles: [require('./recipe-detail.component.scss')]
})

export class RecipeDetailComponent implements OnInit{

    selectedRecipe: IRecipe;
    private recipeIndex: number;

    private subscription: Subscription;

    constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute){}

    ngOnInit(){
        this.subscription = this.route.params.subscribe(
            (params: Params)=> {
                this.dataService.GetSingle(params['id'])
                    .subscribe((recipe: IRecipe) => this.selectedRecipe = recipe)
            }
        );
    }

    /*ngOnDestroy(){
        this.subscription.unsubscribe();
    }*/

    onEdit(){
        this.router.navigate(['/recipes', this.selectedRecipe.id, 'edit']);
    }

    onDelete(){
        this.dataService.Delete(this.selectedRecipe.id)
            .subscribe((recipe) => {
                this.router.navigate([''])
            })
    }

}