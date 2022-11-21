import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms'; 

import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [AppComponent],


  
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,QRCodeModule,FormsModule,
    IonicStorageModule.forRoot({
      name:'mybd',
      driverOrder: [Drivers.IndexedDB,Drivers.LocalStorage]
    }),],
  
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
