import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravellerChequesService } from 'src/app/services/travellerCheques/traveller-cheques.service';

@Component({
  selector: 'app-delete-traveller-cheques',
  templateUrl: './delete-traveller-cheques.component.html',
  styleUrls: ['./delete-traveller-cheques.component.css']
})
export class DeleteTravellerChequesComponent implements OnInit {
  deleteFormTravellerCheques:FormGroup;

  constructor(
    private route:ActivatedRoute,
    private formBuilder:FormBuilder,
    private travellerChequesService:TravellerChequesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log("Page de suppression");
    this.deleteFormTravellerCheques=this.formBuilder.group({
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

    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.travellerChequesService.findTravellerCheques(id).subscribe(
      dataTravellerCheques => {
        this.deleteFormTravellerCheques.setValue(dataTravellerCheques);
      }
    );
  }
  //Method qui permet de supprimer un cheque
  remove(){
    const idTravellerC = Number(this.route.snapshot.paramMap.get("id"));
    if (confirm("Voulez-vous vraiment supprimer le chèque d'id : "+idTravellerC+" ?")){
      console.log("Suppression OK pour le chèque "+idTravellerC);
      this.travellerChequesService.deleteTravellerCheques(idTravellerC).subscribe(
      () => {
        this.router.navigate(["/travellerchequess"]);
      }
    )
    }else{
      console.log("Le chèque n'a pas été supprimé !");
    }
    
  }

}
