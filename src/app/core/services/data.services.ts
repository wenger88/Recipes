/**
 * Created by goran.pavlovski on 11/16/2016.
 */


import {Injectable} from "@angular/core";
import {IRecipe} from "../../recipes/interfaces";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class DataService{

    recipesUrl: string = 'http://localhost:3000/recipes';
    recipes: IRecipe[];

    constructor(private _http: Http){}

    public GetAll = (): Observable<IRecipe[]> => {
        return this._http.get(this.recipesUrl)
            .map((response: Response) => <IRecipe[]>response.json())
            .catch(this.handleError);
    }

    public GetSingle = (id: number): Observable<IRecipe> => {
        return this._http.get(this.recipesUrl + '/' + id)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    /*GetSingle(id: number): Observable<IRecipe>{
        return this._http.get(this.recipesUrl + '/'+ id)
            .map((res: Response) => res.json())
    }*/

    public Add = (body: Object): Observable<IRecipe> => {
        let toAdd = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this.recipesUrl, toAdd, options)
            .map((response: Response) => <IRecipe>response.json())
            .catch(this.handleError);
    }

    public Update = (itemToUpdate: IRecipe): Observable<boolean> => {
        return this._http.put(this.recipesUrl + '/' + itemToUpdate.id, itemToUpdate)
            .map((response: Response) => <IRecipe>response.json())
            .catch(this.handleError);
    }

    public Delete = (id: number): Observable<Response> => {
        return this._http.delete(this.recipesUrl + '/' + id)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}