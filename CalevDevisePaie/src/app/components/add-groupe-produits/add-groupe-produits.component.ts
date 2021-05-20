import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupeProduitsService } from 'src/app/services/groupeProduits/groupe-produits.service';

@Component({
  selector: 'app-add-groupe-produits',
  templateUrl: './add-groupe-produits.component.html',
  styleUrls: ['./add-groupe-produits.component.css']
})
export class AddGroupeProduitsComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder:FormBuilder, private groupeProduitsService:GroupeProduitsService, private router:Router) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      idGroupeProduit:[''],
      produitReferent:['',Validators.required],
      numProduitReferent:['',Validators.required],
      valeurAbregee:['',Validators.required],
      valeurDetaillee:['',Validators.required]
    });
  }

  create(){
    console.log(this.form.value);
    this.groupeProduitsService.saveGroupeProduits(this.form.value).subscribe(() =>{
      // this.router.navigate(['/admins']) //Pas de redirection vers le fichier admins
    });
  }

}
