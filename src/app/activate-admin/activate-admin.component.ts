import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../MyServices/admin-service.service';
import { error } from 'console';


@Component({
  selector: 'app-activate-admin',
  templateUrl: './activate-admin.component.html',
  styleUrl: './activate-admin.component.css'
})
export class ActivateAdminComponent implements OnInit{
  Email?:string;
  
 constructor(private adminService:AdminServiceService ,private router: Router) {}

  ngOnInit(): void {
    this.Email=window.sessionStorage.getItem('AdminLogin')!;
      if (window.sessionStorage.getItem("AdminLogin") != null) {
  
      let adminTypeId = window.sessionStorage.getItem("AdminTypeId");
        if (adminTypeId == '0') {
          this.router.navigate(['maprofile']).then(()=>{
            window.location.reload();
          });
        } else {
          this.router.navigate(['oaprofile']).then(()=>{
            window.location.reload();
          });
        }
      }
    
  }

  btn_Active():void{
    if(this.Email==null) {
      alert('no email found, please login again');
      this.router.navigate(["login"]).then(()=>{
        window.location.reload();
      });
    }
    this.adminService.activateAdmin(this.Email!).subscribe(
      (data)=>{
        if(data==1){
          alert("account activated sucessfully , please login");
          this.router.navigate(["login"]).then(()=>{
            window.location.reload();
          });
        }else{
          alert('Failed to activate the account');
        }
      },
      (error)=>{
        console.error(error);
      alert('An error occurred. Please try again later.');
      this.router.navigate(["login"]).then(()=>{
        window.location.reload();
      });
      }
    );
  }

}
