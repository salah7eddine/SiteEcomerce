import {Categorie} from "./model.categorie";
/**
 * Created by Admin on 24/03/2018.
 */
export class Produit {

  designation:string = "";
  description:string = "";
  prix:number = 0;
  quantite:number = 0;
  photo:string = "";
  categorie:Categorie;

  constructor(categorie:Categorie) {
    this.categorie = categorie;
  }

}
