import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LingotsService } from 'src/app/services/lingots/lingots.service';

@Component({
  selector: 'app-add-lingots',
  templateUrl: './add-lingots.component.html',
  styleUrls: ['./add-lingots.component.css']
})
export class AddLingotsComponent implements OnInit {
  formLingots;

  constructor(
    private formBuilder:FormBuilder,
    private lingotsService:LingotsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.formLingots=this.formBuilder.group({
      idLingots:[''],
      refLingots:['',Validators.required],
      nomLingots:['',Validators.required],
      produitRef:['',Validators.required],
      poidsOrFinLing:['',Validators.required]
    });
  }
  create(){
    console.log(this.formLingots.value);
    this.lingotsService.saveLingots(this.formLingots.value).subscribe(() =>{

    });
  }

}
