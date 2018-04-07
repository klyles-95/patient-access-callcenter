import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallCenterComponent } from './callcenter/callcenter.component';
import { TdiContactComponent } from './callcenter/tdi-contact/tdi-contact.component';
import { TdiContactListComponent } from './callcenter/tdi-contact/tdi-contact-list/tdi-contact-list.component';
import { TdiContactDetailComponent } from './callcenter/tdi-contact/tdi-contact-detail/tdi-contact-detail.component';
import { ClientContactComponent } from './callcenter/client-contact/client-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  { 
    path: '', 
    redirectTo:'/login',
    pathMatch:'full'

  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { 
    path: 'dashboard', 
    canActivate: [AuthGuard],
    component: DashboardComponent 
  },
  { 
    path: 'callcenter', 
    canActivate: [AuthGuard],
    component: CallCenterComponent
   
  },
  { 
    path: 'client-contact', 
    canActivate: [AuthGuard],
    component: ClientContactComponent
   
  },
  { 
    path: 'tdi-contact', 
    canActivate: [AuthGuard],
    component: TdiContactComponent
   
  },
  { 
    path: 'tdi-contact/tdi-contact-list', 
    canActivate: [AuthGuard],
    component: TdiContactListComponent
   
  },
  { 
    path: 'tdi-contact/tdi-contact-detail', 
    canActivate: [AuthGuard],
    component: TdiContactDetailComponent
   
  },
  { 
    path: 'admin', 
    component: AdminComponent 
  },
  ];
 
  

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule { }
