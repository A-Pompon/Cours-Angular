import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupeProduitsService } from 'src/app/services/groupeProduits/groupe-produits.service';

@Component({
  selector: 'app-list-groupe-produits',
  templateUrl: './list-groupe-produits.component.html',
  styleUrls: ['./list-groupe-produits.component.css']
})
export class ListGroupeProduitsComponent implements OnInit {

  groupeProduits;
  formEdit:FormGroup;

  constructor(
    private route:ActivatedRoute,
    private formBuilder:FormBuilder, 
    private groupeProduitsService:GroupeProduitsService, 
    private router:Router
  ) { }

  ngOnInit(): void {
    this.formEdit=this.formBuilder.group({
      idGroupeProduit:[''],
      produitReferent:['',Validators.required],
      numProduitReferent:['',Validators.required],
      valeurAbregee:['',Validators.required],
      valeurDetaillee:['',Validators.required]
    });
    this.groupeProduitsService.getAllGroupeProduits().subscribe(
      data => {
        console.log(data);
        this.groupeProduits=data;
      }
    );
  }
  remove(){
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.groupeProduitsService.deleteGroupeProduits(id).subscribe(() =>{
      this.router.navigate(['/groupeProduits']);// groupeProduits avec le S !!
    })
  }

}
