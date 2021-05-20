import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Admin } from '../../models/admin';
 
@Component({
  selector: 'app-delete-admin',
  templateUrl: './delete-admin.component.html',
  styleUrls: ['./delete-admin.component.css']
})
export class DeleteAdminComponent implements OnInit {
  deleteForm : FormGroup;

  constructor(
    private adminService:AdminService,
    private router:Router,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    console.log("Page de suppression");
    this.deleteForm=this.formBuilder.group({
      idAdmin:[''],
      nom:['',Validators.required],
      prenom:['',Validators.required],
      mailAdmin:['',Validators.required],
      mdp:['',Validators.required]
  });

  const id = Number(this.route.snapshot.paramMap.get("id"));
  this.adminService.findAdmin(id).subscribe(
    data => {
      this.deleteForm.setValue(data);
    }
  );
  }
  //Method qui permet de supprimer un admin
  remove(){
    const idAdmin = Number(this.route.snapshot.paramMap.get("id"));
    if (confirm("Voulez-vous vraiment supprimer l'administrateur d'id : "+idAdmin+" ?")){
      console.log("Suppression OK pour l'administrateur "+idAdmin);
      this.adminService.deleteAdmin(idAdmin).subscribe(
      () => {
        this.router.navigate(["/admin"]);
      }
    )
    }else{
      console.log("L'administrateur n'a pas été supprimé !");
    }
    
  }

}
