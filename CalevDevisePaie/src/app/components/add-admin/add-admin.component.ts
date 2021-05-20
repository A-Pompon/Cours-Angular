import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private adminService:AdminService, 
    private router:Router
  ) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      idAdmin:[''], 
      nom:['',Validators.required],
      prenom:['',Validators.required],
      mailAdmin:['',Validators.required],
      mdp:['',Validators.required]//A voir avec pwd ?
    });
  }

  create(){
    console.log(this.form.value);
    this.adminService.saveAdmin(this.form.value).subscribe(() =>{
      // this.router.navigate(['/admins']) //Pas de redirection vers le fichier admins
    });
  }
  
}
