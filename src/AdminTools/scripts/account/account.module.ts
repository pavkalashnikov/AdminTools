import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { RegisterComponent } from './register.component';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login.component';

import { ValidationDirective } from '../directives/validation.directive';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot()

    ],
    declarations: [
        AccountComponent,
        RegisterComponent,
        LoginComponent,
        ValidationDirective
    ],
    exports: [
        AccountComponent
    ]
})
export class AccountModule { }