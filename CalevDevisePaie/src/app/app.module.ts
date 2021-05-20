import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { DevisesComponent } from './components/devises/devises.component';
import { GroupeProduitsComponent } from './components/groupe-produits/groupe-produits.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { DeleteAdminComponent } from './components/delete-admin/delete-admin.component';
import { AddGroupeProduitsComponent } from './components/add-groupe-produits/add-groupe-produits.component';
import { DeleteGroupeProduitsComponent } from './components/delete-groupe-produits/delete-groupe-produits.component';
import { EditGroupeProduitsComponent } from './components/edit-groupe-produits/edit-groupe-produits.component';
import { ListGroupeProduitsComponent } from './components/list-groupe-produits/list-groupe-produits.component';
import { AddTravellerChequesComponent } from './components/add-traveller-cheques/add-traveller-cheques.component';
import { DeleteTravellerChequesComponent } from './components/delete-traveller-cheques/delete-traveller-cheques.component';
import { TravellerChequesComponent } from './components/traveller-cheques/traveller-cheques.component';
import { EditTravellerChequesComponent } from './components/edit-traveller-cheques/edit-traveller-cheques.component';
import { ListTravellerChequesComponent } from './components/list-traveller-cheques/list-traveller-cheques.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LingotsComponent } from './components/lingots/lingots.component';
import { AddLingotsComponent } from './components/add-lingots/add-lingots.component';
import { DeleteLingotsComponent } from './components/delete-lingots/delete-lingots.component';
import { EditLingotsComponent } from './components/edit-lingots/edit-lingots.component';
import { ListLingotsComponent } from './components/list-lingots/list-lingots.component';

//Création d'une table de routage
const appRoutes: Routes =[
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'devises',
    component:DevisesComponent
  },
  {
    path:'groupeProduits',
    component:GroupeProduitsComponent
  },
  {
    path:'admin/:id',
    component:ListAdminComponent
  },
  {
    path:'edit/:id',
    component:EditAdminComponent
  },
  {
    path:'', redirectTo:'/admins', pathMatch:'full'
    
  },
  {
    path:'delete/:id',
    component:DeleteAdminComponent
  },
  {
    path:'', redirectTo:'/admins', pathMatch:'full'
    
  },
  {
    path:'edit-produits/:id',
    component:EditGroupeProduitsComponent
  },
  {
    path:'delete-produits/:id',
    component:DeleteGroupeProduitsComponent
  },
  {
    path:'', redirectTo:'/groupeProduits', pathMatch:'full'
    
  },
  {
    path:'travellerchequess',
    component:TravellerChequesComponent
  },
  {
    path:'edit-travellercheques/:id',
    component:EditTravellerChequesComponent
  },
  {
    path:'delete-travellercheques/:id',
    component:DeleteTravellerChequesComponent
  },
  {
    path:'', redirectTo:'/travellerchequess', pathMatch:'full'
    
  },

  {
    path:'lingotss',
    component:LingotsComponent
  },
  {
    path:'edit-lingots/:id',
    component:EditLingotsComponent
  },
  {
    path:'', redirectTo:'/lingotss', pathMatch:'full'
    
  },
  {
    path:'delete-lingots/:id',
    component:DeleteLingotsComponent
  },
  {
    path:'', redirectTo:'/lingotss', pathMatch:'full'
    
  },

]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DevisesComponent,
    GroupeProduitsComponent,
    AddAdminComponent,
    ListAdminComponent,
    EditAdminComponent,
    DeleteAdminComponent,
    AddGroupeProduitsComponent,
    DeleteGroupeProduitsComponent,
    EditGroupeProduitsComponent,
    ListGroupeProduitsComponent,
    AddTravellerChequesComponent,
    DeleteTravellerChequesComponent,
    TravellerChequesComponent,
    EditTravellerChequesComponent,
    ListTravellerChequesComponent,
    HeaderComponent,
    FooterComponent,
    LingotsComponent,
    AddLingotsComponent,
    DeleteLingotsComponent,
    EditLingotsComponent,
    ListLingotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
