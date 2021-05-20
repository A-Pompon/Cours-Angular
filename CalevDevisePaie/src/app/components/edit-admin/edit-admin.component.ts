import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
  editForm:FormGroup;

  constructor(
    private adminService:AdminService,
    private router:Router,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.editForm=this.formBuilder.group({
      idAdmin:[''],
      nom:['',Validators.required],
      prenom:['',Validators.required],
      mailAdmin:['',Validators.required],
      mdp:['',Validators.required]
    });
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.adminService.editAdmin(id).subscribe(
      data =>{
        this.editForm.setValue(data);
      }
    )
  }
  update(){
    console.log(this.editForm.value);
    if(this.editForm.valid){
      this.adminService.updateAdmin(this.editForm.value).subscribe(
        () =>{
          this.router.navigate(['/admin']);//DERNIERE MODIF amdin's'
        }
      )
    }
  }

}
