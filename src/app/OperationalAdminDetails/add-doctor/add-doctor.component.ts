import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent implements OnInit{
  constructor(private router: Router) {}
    ngOnInit(): void {  
      if (window.sessionStorage.getItem("AdminLogin") == null) {
        this.router.navigate(['login']).then(()=>{
          window.location.reload();
        });
    }
  }

}
