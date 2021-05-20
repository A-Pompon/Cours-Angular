import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupeProduitsService } from 'src/app/services/groupeProduits/groupe-produits.service';

@Component({
  selector: 'app-groupe-produits',
  templateUrl: './groupe-produits.component.html',
  styleUrls: ['./groupe-produits.component.css']
})
export class GroupeProduitsComponent implements OnInit {
  groupeProduits;

  constructor(private groupeProduitsService:GroupeProduitsService, private router:Router) { }

  ngOnInit(): void {
    this.getGroupeProduits();
  }

  getGroupeProduits(){
    this.groupeProduitsService.getAllGroupeProduits().subscribe(
      data => {
        console.log(data);
        this.groupeProduits=data;
      }
    )
  }
}
