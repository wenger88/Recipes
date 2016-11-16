/**
 * Created by goran.pavlovski on 11/16/2016.
 */


import {Injectable} from "@angular/core";
import {IRecipe} from "../../recipes/interfaces";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class DataService{

    recipesUrl: string = 'http://localhost:3000/recipes';
    recipes: IRecipe[];
    headers: Headers;

    constructor(private _http: Http){}

    public GetAll = (): Observable<IRecipe[]> => {
        return this._http.get(this.recipesUrl)
            .map((response: Response) => <IRecipe[]>response.json())
            .catch(this.handleError);
    }

    public GetSingle = (id: number): Observable<IRecipe> => {
        return this._http.get(this.recipesUrl + id)
            .map((response: Response) => <IRecipe>response.json())
            .catch(this.handleError);
    }

    public Add = (itemName: string): Observable<IRecipe> => {
        let toAdd = JSON.stringify({ ItemName: itemName });

        return this._http.post(this.recipesUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <IRecipe>response.json())
            .catch(this.handleError);
    }

    public Update = (id: number, itemToUpdate: IRecipe): Observable<IRecipe> => {
        return this._http.put(this.recipesUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map((response: Response) => <IRecipe>response.json())
            .catch(this.handleError);
    }

    public Delete = (id: number): Observable<Response> => {
        return this._http.delete(this.recipesUrl + id)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}