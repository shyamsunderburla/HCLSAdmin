import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maprofile',
  templateUrl: './maprofile.component.html',
  styleUrl: './maprofile.component.css'
})
export class MAProfileComponent implements OnInit{
  constructor(private router: Router) {}
    ngOnInit(): void {  
      if (window.sessionStorage.getItem("AdminLogin") == null) {
        this.router.navigate(['login']).then(()=>{
          window.location.reload();
        });
    }
  }

}
