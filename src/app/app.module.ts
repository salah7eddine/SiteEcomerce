import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProduitComponent } from './produit/produit.component';
import { CategorieComponent } from './categorie/categorie.component';
import {Routes, RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {ProduitsServices} from "../services/produits.services";
import {FormsModule} from "@angular/forms";
import { NewProduitComponent } from './new-produit/new-produit.component';
import {CategoriesServices} from "../services/categorie.service";

const appRoutes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'produit',component:ProduitComponent},
  {path:'new-produit',component:NewProduitComponent},
  {path:'categorie',component:CategorieComponent},
  {path:'',redirectTo:'/about', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProduitComponent,
    CategorieComponent,
    NewProduitComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpModule,FormsModule
  ],
  providers: [ProduitsServices,CategoriesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
