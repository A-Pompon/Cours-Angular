import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lingots } from 'src/app/models/lingots';

@Injectable({
  providedIn: 'root'
})
export class LingotsService {

  httpOptions={
    headers:new HttpHeaders ({'Content-Type':'application/json'})
  }

  constructor(private http:HttpClient) { }

  uriLingots="http://afpa-paul.fr.nf:8080/lingotss";

  getAllLingots(){
    return this.http.get("http://afpa-paul.fr.nf:8080/lingotss");
  }

  findLingots(id:number){
    return this.http.get("http://afpa-paul.fr.nf:8080/lingotss/"+id)
  }

  saveLingots(lingots:Lingots){
    return this.http.post("http://afpa-paul.fr.nf:8080/lingotss",lingots);
  }

  deleteLingots(id:number){
    return this.http.delete("http://afpa-paul.fr.nf:8080/lingotss/"+id);
  }

  editLingots(id:number){
    return this.http.get("http://afpa-paul.fr.nf:8080/lingotss/"+id);
  }

  updateLingots(lingots:Lingots){
    return this.http.put("http://afpa-paul.fr.nf:8080/lingots", JSON.stringify(lingots), this.httpOptions);
  }
}
