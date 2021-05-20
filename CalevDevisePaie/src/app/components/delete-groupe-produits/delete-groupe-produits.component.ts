import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupeProduitsService } from 'src/app/services/groupeProduits/groupe-produits.service';


@Component({
  selector: 'app-delete-groupe-produits',
  templateUrl: './delete-groupe-produits.component.html',
  styleUrls: ['./delete-groupe-produits.component.css']
})
export class DeleteGroupeProduitsComponent implements OnInit {
  deleteForm : FormGroup;

  constructor(
    private route:ActivatedRoute,
    private formBuilder:FormBuilder, 
    private groupeProduitsService:GroupeProduitsService, 
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log("Page de suppression");
    this.deleteForm=this.formBuilder.group({
      idGroupeProduit:[''],
      produitReferent:['',Validators.required],
      numProduitReferent:['',Validators.required],
      valeurAbregee:['',Validators.required],
      valeurDetaillee:['',Validators.required]
    });

    const id = Number(this.route.snapshot.paramMap.get("id"));
  this.groupeProduitsService.findGroupeProduits(id).subscribe(
    data => {
      this.deleteForm.setValue(data);
    }
  );
  }
  //Method qui permet de supprimer un groupe de produits
  remove(){
    const idGroupeP = Number(this.route.snapshot.paramMap.get("id"));
    if (confirm("Voulez-vous vraiment supprimer le groupe de produits d'id : "+idGroupeP+" ?")){
      console.log("Suppression OK pour le groupe de produits "+idGroupeP);
      this.groupeProduitsService.deleteGroupeProduits(idGroupeP).subscribe(
      () => {
        this.router.navigate(["/groupeProduits"]);//GroupeProduit's' ??
      }
    )
    }else{
      console.log("Le groupe de produits n'a pas été supprimé !");
    }
    
  }
}
