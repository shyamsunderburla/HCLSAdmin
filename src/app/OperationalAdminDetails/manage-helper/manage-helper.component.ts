import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-helper',
  templateUrl: './manage-helper.component.html',
  styleUrl: './manage-helper.component.css'
})
export class ManageHelperComponent implements OnInit{
  constructor(private router: Router) {}
  ngOnInit(): void {  
    if (window.sessionStorage.getItem("AdminLogin") == null) {
      this.router.navigate(['login']).then(()=>{
        window.location.reload();
      });
  }
}
}
