import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravellerChequesService } from 'src/app/services/travellerCheques/traveller-cheques.service';

@Component({
  selector: 'app-edit-traveller-cheques',
  templateUrl: './edit-traveller-cheques.component.html',
  styleUrls: ['./edit-traveller-cheques.component.css']
})
export class EditTravellerChequesComponent implements OnInit {
  editFormTravellerCheques:FormGroup;

  constructor(
    private route:ActivatedRoute,
    private formBuilder:FormBuilder,
    private travellerChequesService:TravellerChequesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log("Page d'édition");
    this.editFormTravellerCheques=this.formBuilder.group({
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
    const id=Number(this.route.snapshot.paramMap.get("id"));
    this.travellerChequesService.editTravellerCheques(id).subscribe(
      dataTravellerC =>{
        this.editFormTravellerCheques.setValue(dataTravellerC);
      }
    );
  }
  update(){
    console.log(this.editFormTravellerCheques.value);
    if(this.editFormTravellerCheques.valid){
      this.travellerChequesService.updateTravellerCheques(this.editFormTravellerCheques.value).subscribe(
        () =>{
          this.router.navigate(['/travellerchequess']);
        }
      )
    }
  }

}
