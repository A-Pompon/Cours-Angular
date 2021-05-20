import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravellerChequesService } from 'src/app/services/travellerCheques/traveller-cheques.service';

@Component({
  selector: 'app-list-traveller-cheques',
  templateUrl: './list-traveller-cheques.component.html',
  styleUrls: ['./list-traveller-cheques.component.css']
})
export class ListTravellerChequesComponent implements OnInit {

  travellerChequess;
  formEditTravellerCheques:FormGroup

  constructor(
    private travellerChequesService:TravellerChequesService,
    private router:Router,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.formEditTravellerCheques=this.formBuilder.group({
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
    this.travellerChequesService.getAllTravellerCheques().subscribe(
      dataTravellerC => {
        console.log(dataTravellerC);
        this.travellerChequess=dataTravellerC;
      }
    );
  }
  remove(){
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.travellerChequesService.deleteTravellerCheques(id).subscribe(() =>{
      this.router.navigate(['/travellerchequess']);
    });
  }
}

