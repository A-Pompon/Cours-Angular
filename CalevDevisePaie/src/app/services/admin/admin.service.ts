import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from 'src/app/settings/app.settings';
import { Admin } from 'src/app/models/admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

httpOptions={
  headers:new HttpHeaders ({'Content-Type':'application/json'})
}
  constructor(private http:HttpClient) { }

  uriAdmin="http://afpa-paul.fr.nf:8080/admins";

  // Le nom de cette method doit être identique à celui de notre controller dans le backend
  getAllAdmins(){
    // return this.http.get(AppSettings.APP_URL+"");
    return this.http.get("http://afpa-paul.fr.nf:8080/admins");
  }

  //Recherche un administrateur en fonction de son id
  findAdmin(id:number){
    return this.http.get("http://afpa-paul.fr.nf:8080/admins/"+id)
  }

  saveAdmin(admin:Admin){
    return this.http.post(this.uriAdmin,JSON.stringify(admin),this.httpOptions);
    // return this.http.post("http://afpa-paul.fr.nf:8080/admins",admin);
  }

  deleteAdmin(id:number){
    return this.http.delete("http://afpa-paul.fr.nf:8080/admins/"+id);
  }

  editAdmin(id:number){
    return this.http.get("http://afpa-paul.fr.nf:8080/admins/"+id);
  }

  updateAdmin(admin:Admin){
    // return this.http.put("http://afpa-paul.fr.nf:8080/admin",admin); //Marche aussi !
    return this.http.put("http://afpa-paul.fr.nf:8080/admin", JSON.stringify(admin), this.httpOptions);
  }
}
