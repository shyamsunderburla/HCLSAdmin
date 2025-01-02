import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-helper',
  templateUrl: './add-helper.component.html',
  styleUrl: './add-helper.component.css'
})
export class AddHelperComponent implements OnInit{
  constructor(private router: Router) {}
  ngOnInit(): void {  
    if (window.sessionStorage.getItem("AdminLogin") == null) {
      this.router.navigate(['login']).then(()=>{
        window.location.reload();
      });
  }
}
}
