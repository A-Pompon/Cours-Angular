import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LingotsService } from 'src/app/services/lingots/lingots.service';

@Component({
  selector: 'app-list-lingots',
  templateUrl: './list-lingots.component.html',
  styleUrls: ['./list-lingots.component.css']
})
export class ListLingotsComponent implements OnInit {

  lingotss;
  formEditLingots:FormGroup

  constructor(
    private lingotsService:LingotsService,
    private router:Router,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.formEditLingots=this.formBuilder.group({
      idLingots:[''],
      refLingots:['',Validators.required],
      nomLingots:['',Validators.required],
      produitRef:['',Validators.required],
      poidsOrFinLing:['',Validators.required]
    });
    this.lingotsService.getAllLingots().subscribe(
      dataLingots => {
        console.log(dataLingots);
        this.lingotss=dataLingots;
      }
    );
  }
  remove(){
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.lingotsService.deleteLingots(id).subscribe(() =>{
      this.router.navigate(['/lingotss']);
    });
  }

}
