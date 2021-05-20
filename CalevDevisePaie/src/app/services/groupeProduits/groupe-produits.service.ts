import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GroupeProduits } from 'src/app/models/groupe-produits';
import { AppSettings } from 'src/app/settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class GroupeProduitsService {

  httpOptions={
    headers:new HttpHeaders ({'Content-Type':'application/json'})
  }
  constructor(private http:HttpClient) { }

  uriGroupeProduits="http://afpa-paul.fr.nf:8080/groupeProduits";

  getAllGroupeProduits(){
    return this.http.get("http://afpa-paul.fr.nf:8080/groupeProduits");
  }

  saveGroupeProduits(groupeProduits:GroupeProduits){
    return this.http.post(this.uriGroupeProduits,JSON.stringify(groupeProduits),this.httpOptions);
  }

  //Recherche d'un groupeProduits en fonction de son id
  findGroupeProduits(id:number){
    return this.http.get("http://afpa-paul.fr.nf:8080/groupeProduits/"+id)
  }

  deleteGroupeProduits(id:number){
    return this.http.delete("http://afpa-paul.fr.nf:8080/groupeProduits/"+id);
  }

  editGroupeProduits(id:number){
    return this.http.get("http://afpa-paul.fr.nf:8080/groupeProduits/"+id);
  }

  updateGroupeProduits(groupeProduit:GroupeProduits){
    return this.http.put("http://afpa-paul.fr.nf:8080/groupeProduit/",groupeProduit); //Marche aussi !
  }
}
