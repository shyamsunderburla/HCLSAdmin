import { Component } from '@angular/core';
import { AdminServiceService } from '../MyServices/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {
  email1?:string;
  email2?:string;
  password?:string;
  newPassword?: string;
  result?:number;
   constructor(private adminservice:AdminServiceService, private router: Router) {}
  
  
  
   getPassword(): void {
    if (this.email1==null) {
      alert('No email found.'); 
    }
   this.adminservice.bringPassword(this.email1!).subscribe((data)=>{
   this.password=data;
   alert("password retrived...! "+this.password);
   },
   (error) => {
    console.error(error);
    alert('An error occurred. Please try again later.');
  }
  );
  }
  
    changePassword():void {
      debugger;
      if (this.email2==null) {
        alert('No email found.'); 
      }
      this.adminservice.changePassword(this.email2!,this.newPassword!).subscribe((data)=>{
          this.result=data;
          if(this.result==1){
            alert('Password updated successfully. Please try to login...!');
            this.router.navigate(['login']);
          }
          else{
            alert('Sorry some error occured! please try again...');
          }
       
      },
      (error) => {
        console.error(error);
        alert('An error occurred. Please try again later.');
      }
    );
    
    }
  }

