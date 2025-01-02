import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-oadmin',
  templateUrl: './add-oadmin.component.html',
  styleUrl: './add-oadmin.component.css'
})
export class AddOAdminComponent implements OnInit{
  constructor(private router: Router) {}
    ngOnInit(): void {  
      if (window.sessionStorage.getItem("AdminLogin") == null) {
        this.router.navigate(['login']).then(()=>{
          window.location.reload();
        });
    }
  }

}
