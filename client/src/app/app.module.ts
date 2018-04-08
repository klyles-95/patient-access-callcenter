import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CallCenterComponent } from './callcenter/callcenter.component';
import { ClientContactComponent } from './callcenter/client-contact/client-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TdiContactComponent } from './callcenter/tdi-contact/tdi-contact.component';
import { TdiContactListComponent } from './callcenter/tdi-contact/tdi-contact-list/tdi-contact-list.component';
import { TdiContactDetailComponent } from './callcenter/tdi-contact/tdi-contact-detail/tdi-contact-detail.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth.service';
import { UserService } from './user.service'
// import { EventService } from './event.service';
// import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CallCenterComponent,
    ClientContactComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    TdiContactComponent,
    TdiContactListComponent,
    TdiContactDetailComponent,
    UserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MaterialModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
