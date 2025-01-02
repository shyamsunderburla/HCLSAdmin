import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-doctor',
  templateUrl: './manage-doctor.component.html',
  styleUrl: './manage-doctor.component.css'
})
export class ManageDoctorComponent implements OnInit{
  constructor(private router: Router) {}
  ngOnInit(): void {  
    if (window.sessionStorage.getItem("AdminLogin") == null) {
      this.router.navigate(['login']).then(()=>{
        window.location.reload();
      });
  }
}
}
