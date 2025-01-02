import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oaprofile',
  templateUrl: './oaprofile.component.html',
  styleUrl: './oaprofile.component.css'
})
export class OAprofileComponent implements OnInit{
  constructor(private router: Router) {}
  ngOnInit(): void {  
    if (window.sessionStorage.getItem("AdminLogin") == null) {
      this.router.navigate(['login']).then(()=>{
        window.location.reload();
      });
  }
}
}
