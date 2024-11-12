// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { RegisterComponent } from './auth/componets/register/register.component';
// import { registerLocaleData } from '@angular/common';
// import en from '@angular/common/locales/en';
// import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
// import { DemoNgZorroModule } from './DemoNgZorroAntdModule';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {  HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoNgZorroAntdModule } from "./DemoNgZorroAntdModule";
import en from "@angular/common/locales/en";
import { en_US, NZ_I18N } from "ng-zorro-antd/i18n";
import { RegisterComponent } from "./auth/componets/register/register.component";
import { LoginComponent } from "./auth/componets/login/login.component";


// import { NzLayoutModule } from 'ng-zorro-antd/layout';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    // NzLayoutModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
