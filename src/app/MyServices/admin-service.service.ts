import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdmin } from '../Models/IAdmin';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {


  constructor(private http:HttpClient) { }

  checkAdminLogin(email: string, password: string): Observable<any> {
    const url = "https://localhost:7094/api/AdminWebAPI/CheckAdminLogin?Email=Shyam%40123&Password=123456789";
    return this.http.get<IAdmin>(url);
  }

  activateAdmin(email: string): Observable<number> {
    const url = "http://localhost:9611/api/Admin/activateAdmin?Email="+email;
    return this.http.get<number>(url);  
  }

  changePassword(email: string, password: string): Observable<number> {
    return this.http.get<number>("https://localhost:7094/api/AdminWebAPI/changePassword?Email="+email+"&Password="+password);
  }
  
  bringPassword(email: string): Observable<string> {
    const url = "https://localhost:7094/api/AdminWebAPI/bringPassword?Email="+email;
    return this.http.get(url, { responseType: 'text' });
  }
  
}
