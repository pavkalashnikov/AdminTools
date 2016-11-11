///<reference path="../node_modules/typescript/lib/lib.es6.d.ts"/> 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AccountModule } from './account/account.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';


@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        AppRoutingModule,
        FormsModule,
        HttpModule,
        AccountModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }