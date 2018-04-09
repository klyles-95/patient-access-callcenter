import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallCenterComponent } from './callcenter/callcenter.component';
import { TdiContactComponent } from './callcenter/tdi-contact/tdi-contact.component';
import { TdiContactListComponent } from './callcenter/tdi-contact/tdi-contact-list/tdi-contact-list.component';
import { TdiContactDetailComponent } from './callcenter/tdi-contact/tdi-contact-detail/tdi-contact-detail.component';
import { ClientContactComponent } from './callcenter/client-contact/client-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

 
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'logout', 
    component: LogoutComponent 
  },
  { 
    path: 'admin', 
    component: AdminComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent 
  },
  { 
    path: '', 
    component: HomeComponent 
  }
];
 
  

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule { }
