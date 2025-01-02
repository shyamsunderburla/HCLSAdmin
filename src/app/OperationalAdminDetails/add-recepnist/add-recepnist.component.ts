import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recepnist',
  templateUrl: './add-recepnist.component.html',
  styleUrl: './add-recepnist.component.css'
})
export class AddRecepnistComponent implements OnInit{
  constructor(private router: Router) {}
  ngOnInit(): void {  
    if (window.sessionStorage.getItem("AdminLogin") == null) {
      this.router.navigate(['login']).then(()=>{
        window.location.reload();
      });
  }
}
}
