import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Produit} from "../model/model.produit";
/**
 * Created by Admin on 23/03/2018.
 */

@Injectable()
export class ProduitsServices{
  constructor(public http:Http){

  }

  AllProduits(){
    return this.http.get("http://localhost:8080/produits").map(resp=>resp.json());
  }

  getProduits(motCle:String,page:number,size:number){
    return this.http.get("http://localhost:8080/chercherProduit?mc="+motCle+"&size="+size+"&page="+page).map(resp=>resp.json());
  }

  saveProduit(produit:Produit){
    return this.http.post("http://localhost:8080/produits",produit).map(resp=>resp.json());
  }


}
