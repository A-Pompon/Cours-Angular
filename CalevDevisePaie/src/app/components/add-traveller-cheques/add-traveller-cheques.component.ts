import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravellerChequesService } from 'src/app/services/travellerCheques/traveller-cheques.service';

@Component({
  selector: 'app-add-traveller-cheques',
  templateUrl: './add-traveller-cheques.component.html',
  styleUrls: ['./add-traveller-cheques.component.css']
})
export class AddTravellerChequesComponent implements OnInit {
  formTravellerCheques;

  constructor(
    private formBuilder:FormBuilder,
    private travellerChequesService:TravellerChequesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.formTravellerCheques=this.formBuilder.group({
      idTC:[''],
      tauxChange:['',Validators.required],
      nomProprietaire:['',Validators.required],
      prenomProprietaire:['',Validators.required],
      adresse:['',Validators.required],
      ville:['',Validators.required],
      codePostal:['',Validators.required],
      signature:[''],
      lieuEmiss:['',Validators.required],
      datemiss:['',Validators.required],
      montant:['',Validators.required],
      numSerie:['',Validators.required],
      societeEmittrice:[''],
      nombreTC:['',Validators.required],
      montantTotal:['',Validators.required],
      codeBanque:['',Validators.required],
      logo:[''],
      ordreDePaiement:['',Validators.required]
    });
  }

  create(){
    console.log(this.formTravellerCheques.value);
    this.travellerChequesService.saveTravellerCheques(this.formTravellerCheques.value).subscribe(() =>{

    });
  }

}
