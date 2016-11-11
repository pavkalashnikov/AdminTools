import { Component } from '@angular/core';
import { AccountService } from '../account/account.service';
import { RegisterModel } from '../models/register.model';
import { Http } from '@angular/http';

@Component({
    template: `
    <md-card>
        <md-card-content>
            <md-input type="email" placeholder="Email"  [(ngModel)]="registerModel.email"></md-input>
            <md-input type="password" placeholder="Password"  [(ngModel)]="registerModel.password"></md-input>
        </md-card-content>
        <md-card-actions>
            <button md-button (click)="onSubmit()">Done</button>
            <button md-button>Cancel</button>
        </md-card-actions>
    </md-card>
    `,
    selector: 'account-login',
    providers: [
        AccountService
    ]
})
export class LoginComponent {
    constructor(private accountService: AccountService) { }

    registerModel = new RegisterModel('','',undefined);

    submitted = false;
    onSubmit() {
        //this.submitted = true;
        //this.accountService.register(this.registerModel);
    }
}