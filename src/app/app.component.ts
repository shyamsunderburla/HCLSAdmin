import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HCLSAdmin';
  AnonymousFlag:boolean=false;
  SecureFlag:boolean=true;
  ManagerialFlag:boolean=false;
  OperationalFlag:boolean=true;

  constructor(private router: Router) {}

  ngOnInit() {
  //  if (this.ManagerialFlag) {
     
  //     this.router.navigate(['/maprofile']);
  //   } 
  //   else if (this.OperationalFlag) {

  //     this.router.navigate(['/oaprofile']);

  //   } 
  //   else {
  //     this.router.navigate(['/home']);
  //   }
  }
}
 