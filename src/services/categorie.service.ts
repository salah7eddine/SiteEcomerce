import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
/**
 * Created by Admin on 24/03/2018.
 */

@Injectable()
export class CategoriesServices{
  constructor(public http:Http){
  }

  getCategories(){
    return this.http.get("http://localhost:8080/categories").map(resp=>resp.json());
  }
}
