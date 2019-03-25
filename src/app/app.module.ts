import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BusinessModule } from './business/business.module';

import { TokenInterceptor } from './core/auth/auth.interceptor';
import { AuthGuardService } from './core/auth/services/auth-guard.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    HomeModule,
    SharedModule,
    BusinessModule,
    
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService, 
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
