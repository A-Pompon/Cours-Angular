import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LingotsService } from 'src/app/services/lingots/lingots.service';

@Component({
  selector: 'app-edit-lingots',
  templateUrl: './edit-lingots.component.html',
  styleUrls: ['./edit-lingots.component.css']
})
export class EditLingotsComponent implements OnInit {
  editFormLingots:FormGroup;

  constructor(
    private route:ActivatedRoute,
    private formBuilder:FormBuilder, 
    private lingotsService:LingotsService, 
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log("Page d'édition");
    this.editFormLingots=this.formBuilder.group({
      idLingots:[''],
      refLingots:['',Validators.required],
      nomLingots:['',Validators.required],
      produitRef:['',Validators.required],
      poidsOrFinLing:['',Validators.required]
    });
    const id=Number(this.route.snapshot.paramMap.get('id'));
        this.lingotsService.editLingots(id).subscribe(
          dataL =>{
            this.editFormLingots.setValue(dataL);
          }
        );
  }
  update(){
    console.log(this.editFormLingots.value);
    if(this.editFormLingots.valid){
      this.lingotsService.updateLingots(this.editFormLingots.value).subscribe(
        () =>{
          this.router.navigate(['/lingotss']);
        }
      )
    }
  }

}
