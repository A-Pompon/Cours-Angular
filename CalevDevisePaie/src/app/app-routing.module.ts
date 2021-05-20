import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DeleteAdminComponent } from './components/delete-admin/delete-admin.component';
import { DeleteGroupeProduitsComponent } from './components/delete-groupe-produits/delete-groupe-produits.component';
import { DeleteLingotsComponent } from './components/delete-lingots/delete-lingots.component';
import { DeleteTravellerChequesComponent } from './components/delete-traveller-cheques/delete-traveller-cheques.component';
import { DevisesComponent } from './components/devises/devises.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { EditGroupeProduitsComponent } from './components/edit-groupe-produits/edit-groupe-produits.component';
import { EditLingotsComponent } from './components/edit-lingots/edit-lingots.component';
import { EditTravellerChequesComponent } from './components/edit-traveller-cheques/edit-traveller-cheques.component';
import { GroupeProduitsComponent } from './components/groupe-produits/groupe-produits.component';
import { LingotsComponent } from './components/lingots/lingots.component';
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { ListGroupeProduitsComponent } from './components/list-groupe-produits/list-groupe-produits.component';
import { TravellerChequesComponent } from './components/traveller-cheques/traveller-cheques.component';

//Table de routage
const routes: Routes = [{
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
  path:'', redirectTo:'/groupeProduits', pathMatch:'full'
  
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
