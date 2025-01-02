import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activate-admin',
  templateUrl: './activate-admin.component.html',
  styleUrl: './activate-admin.component.css'
})
export class ActivateAdminComponent implements OnInit{
 constructor(private router: Router) {}

  ngOnInit(): void {
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
}
