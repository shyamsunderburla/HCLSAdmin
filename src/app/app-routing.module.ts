import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ActivateAdminComponent } from './activate-admin/activate-admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MAProfileComponent } from './ManageralAdminDetails/maprofile/maprofile.component';
import { AddOAdminComponent } from './ManageralAdminDetails/add-oadmin/add-oadmin.component';
import { ManageOAdminComponent } from './ManageralAdminDetails/manage-oadmin/manage-oadmin.component';
import { AddDoctorComponent } from './OperationalAdminDetails/add-doctor/add-doctor.component';
import { AddHelperComponent } from './OperationalAdminDetails/add-helper/add-helper.component';
import { AddLabComponent } from './OperationalAdminDetails/add-lab/add-lab.component';
import { AddRecepnistComponent } from './OperationalAdminDetails/add-recepnist/add-recepnist.component';
import { ManageDoctorComponent } from './OperationalAdminDetails/manage-doctor/manage-doctor.component';
import { ManageHelperComponent } from './OperationalAdminDetails/manage-helper/manage-helper.component';
import { ManageLabComponent } from './OperationalAdminDetails/manage-lab/manage-lab.component';
import { ManageRecepnistComponent } from './OperationalAdminDetails/manage-recepnist/manage-recepnist.component';
import { OAprofileComponent } from './OperationalAdminDetails/oaprofile/oaprofile.component';

const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:'full'},  //DEFAULT ROUTE
  {path:"Home", component:HomeComponent},
  {path:"Login", component:LoginComponent},
  {path:"About", component:AboutComponent},
  {path:"Contact", component:ContactComponent},
  {path:"ActivateAdmin", component:ActivateAdminComponent},  
  {path:"MaProfile", component:MAProfileComponent},
  {path:"AddOAdmin", component:AddOAdminComponent},
  {path:"ManageOAdmin", component:ManageOAdminComponent},
  {path:"AddDoctor", component:AddDoctorComponent},
  {path:"Addhelper", component:AddHelperComponent},
  {path:"AddLab", component:AddLabComponent},
  {path:"AddRecepnist", component:AddRecepnistComponent},
  {path:"Managedoctor", component:ManageDoctorComponent},
  {path:"ManageHelper", component:ManageHelperComponent},
  {path:"ManageLab", component:ManageLabComponent},
  {path:"Managerecepnist", component:ManageRecepnistComponent},
  {path:"OAProfile", component:OAprofileComponent},
  {path:"**", component:PageNotFoundComponent} ,  //wild card route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
