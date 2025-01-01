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
}
