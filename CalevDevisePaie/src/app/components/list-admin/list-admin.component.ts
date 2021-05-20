import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {
  
  admins;
  formEdit:FormGroup;

  constructor(
    private adminService:AdminService, 
    private router:Router, 
    private route:ActivatedRoute, 
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.formEdit=this.formBuilder.group({
      idAdmin:[''],
      nom:['',Validators.required],
      prenom:['',Validators.required],
      mailAdmin:['',Validators.required],
      mdp:['',Validators.required]//A VOIR AVEC pwd ??
    });
    this.adminService.getAllAdmins().subscribe(
      data => {
        console.log(data);
        this.admins=data;
      }
    );
  }
  remove(){
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.adminService.deleteAdmin(id).subscribe(() =>{
      this.router.navigate(['/admins']);
    });
  }

}
