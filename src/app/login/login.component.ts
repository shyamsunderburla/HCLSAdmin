import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminServiceService } from '../MyServices/admin-service.service';
import { IAdmin } from '../Models/IAdmin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string='';
  password: string = '';
  Admin?:IAdmin;
  
  constructor(
              private adminService: AdminServiceService,
              private router:Router
            ) {}
  
   btn_login(): void {
    
    this.adminService.checkAdminLogin(this.email,this.password).subscribe( data =>{
    this.Admin = data;

    if(this.Admin==null){
        alert("Invalid User name and Password or Not Registred");
        this.router.navigate(["/home"]);
      }
    else{
       // alert("Login success");
        // console.log(this.Admin);
        this.Admin.ActiveStatus=true;
        if (!this.Admin.ActiveStatus) {
          this.router.navigate(["/home"]);
        }
        else{
          window.sessionStorage.setItem("AdminLogin",this.Admin.Email);
          window.sessionStorage.setItem("AdminTypeId",this.Admin.AdminTypeId.toString());
          if(this.Admin.AdminTypeId===0){
            this.router.navigate(["/maprofile"]);
          }else if(this.Admin.AdminTypeId===1){
            this.router.navigate(["/oaprofile"]);
          }
          
          else{
            alert("Invalid Admin Type");
            window.sessionStorage.clear();
            this.router.navigate(["/login"]);
          
          }
        }
      }
    },
      error => {

        alert(error);
        window.sessionStorage.clear();
        this.router.navigate(["/login"]);
      }
    );
  }

  btn_cancel():void{
      this.router.navigate(["/home"]);  
  }
  
}
