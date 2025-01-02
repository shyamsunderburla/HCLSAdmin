import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
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
