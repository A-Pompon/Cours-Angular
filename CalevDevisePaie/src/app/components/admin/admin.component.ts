import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin;
  
  constructor(
    private adminService:AdminService, 
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getAdmins();
  }
  getAdmins(){
    this.adminService.getAllAdmins().subscribe(
      data => {
        console.log(data);
        this.admin=data;
      }
    );
  }
  
}
