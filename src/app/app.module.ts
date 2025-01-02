import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ActivateAdminComponent } from './activate-admin/activate-admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MAProfileComponent } from './ManageralAdminDetails/maprofile/maprofile.component';
import { AddOAdminComponent } from './ManageralAdminDetails/add-oadmin/add-oadmin.component';
import { ManageOAdminComponent } from './ManageralAdminDetails/manage-oadmin/manage-oadmin.component';
import { OAprofileComponent } from './OperationalAdminDetails/oaprofile/oaprofile.component';
import { AddRecepnistComponent } from './OperationalAdminDetails/add-recepnist/add-recepnist.component';
import { ManageRecepnistComponent } from './OperationalAdminDetails/manage-recepnist/manage-recepnist.component';
import { AddDoctorComponent } from './OperationalAdminDetails/add-doctor/add-doctor.component';
import { ManageDoctorComponent } from './OperationalAdminDetails/manage-doctor/manage-doctor.component';
import { AddHelperComponent } from './OperationalAdminDetails/add-helper/add-helper.component';
import { ManageHelperComponent } from './OperationalAdminDetails/manage-helper/manage-helper.component';
import { AddLabComponent } from './OperationalAdminDetails/add-lab/add-lab.component';
import { ManageLabComponent } from './OperationalAdminDetails/manage-lab/manage-lab.component';
import { AdminServiceService } from './MyServices/admin-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    ActivateAdminComponent,
    PageNotFoundComponent,
    MAProfileComponent,
    AddOAdminComponent,
    ManageOAdminComponent,
    OAprofileComponent,
    AddRecepnistComponent,
    ManageRecepnistComponent,
    AddDoctorComponent,
    ManageDoctorComponent,
    AddHelperComponent,
    ManageHelperComponent,
    AddLabComponent,
    ManageLabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  providers: [
    provideClientHydration(),
    AdminServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
