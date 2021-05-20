import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TravellerCheques } from 'src/app/models/traveller-cheques';

@Injectable({
  providedIn: 'root'
})
export class TravellerChequesService {

  httpOptions={
    headers:new HttpHeaders ({'Content-Type':'application/json'})
  }

  constructor(private http:HttpClient) { }

  uriTravellerCheques="http://afpa-paul.fr.nf:8080/travellerchequess";

  getAllTravellerCheques(){
    return this.http.get("http://afpa-paul.fr.nf:8080/travellerchequess");
  }

  findTravellerCheques(id:number){
    return this.http.get("http://afpa-paul.fr.nf:8080/travellerchequess/"+id)
  }

  saveTravellerCheques(travellerCheques:TravellerCheques){
    return this.http.post("http://afpa-paul.fr.nf:8080/travellerchequess",travellerCheques);
  }

  deleteTravellerCheques(id:number){
    return this.http.delete("http://afpa-paul.fr.nf:8080/travellerchequess/"+id);
  }

  editTravellerCheques(id:number){
    return this.http.get("http://afpa-paul.fr.nf:8080/travellerchequess/"+id);
  }

  updateTravellerCheques(travellerCheques:TravellerCheques){
    return this.http.put("http://afpa-paul.fr.nf:8080/travellercheques", JSON.stringify(travellerCheques), this.httpOptions);
  }
}
