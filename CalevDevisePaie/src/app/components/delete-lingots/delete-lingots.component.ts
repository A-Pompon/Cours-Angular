import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LingotsService } from 'src/app/services/lingots/lingots.service';

@Component({
  selector: 'app-delete-lingots',
  templateUrl: './delete-lingots.component.html',
  styleUrls: ['./delete-lingots.component.css']
})
export class DeleteLingotsComponent implements OnInit {
  deleteFormLingots:FormGroup;

  constructor(
    private route:ActivatedRoute,
    private formBuilder:FormBuilder,
    private lingotsService:LingotsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log("Page de suppression");
    this.deleteFormLingots=this.formBuilder.group({
      idLingots:[''],
      refLingots:['',Validators.required],
      nomLingots:['',Validators.required],
      produitRef:['',Validators.required],
      poidsOrFinLing:['',Validators.required]
    });

    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.lingotsService.findLingots(id).subscribe(
      dataLingots => {
        this.deleteFormLingots.setValue(dataLingots);
      }
    );
  }
  remove(){
    const idLing = Number(this.route.snapshot.paramMap.get("id"));
    if (confirm("Voulez-vous vraiment supprimer le lingot d'id : "+idLing+" ?")){
      console.log("Suppression OK pour le lingot "+idLing);
      this.lingotsService.deleteLingots(idLing).subscribe(
      () => {
        this.router.navigate(["/lingotss"]);
      }
    )
    }else{
      console.log("Le chèque n'a pas été supprimé !");
    }
    
  }

}
