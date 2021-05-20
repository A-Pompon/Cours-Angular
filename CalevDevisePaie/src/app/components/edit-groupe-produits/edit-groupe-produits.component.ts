import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupeProduitsService } from 'src/app/services/groupeProduits/groupe-produits.service';

@Component({
  selector: 'app-edit-groupe-produits',
  templateUrl: './edit-groupe-produits.component.html',
  styleUrls: ['./edit-groupe-produits.component.css']
})
export class EditGroupeProduitsComponent implements OnInit {
  editForm:FormGroup;

  constructor(
    private route:ActivatedRoute,
    private formBuilder:FormBuilder, 
    private groupeProduitsService:GroupeProduitsService, 
    private router:Router
  ) { }

  ngOnInit(): void {
    this.editForm=this.formBuilder.group({
          idGroupeProduit:[''],
          produitReferent:['',Validators.required],
          numProduitReferent:['',Validators.required],
          valeurAbregee:['',Validators.required],
          valeurDetaillee:['',Validators.required]
        });
        const id=Number(this.route.snapshot.paramMap.get('id'));
        this.groupeProduitsService.editGroupeProduits(id).subscribe(
          data =>{
            this.editForm.setValue(data);
          }
        );
  }
  update(){
    console.log(this.editForm.value);
    if(this.editForm.valid){
      this.groupeProduitsService.updateGroupeProduits(this.editForm.value).subscribe(
        () =>{
          this.router.navigate(['/groupeProduits']);//DERNIERE MODIF groupeProduit's'
        }
      )
    }
  }

}
