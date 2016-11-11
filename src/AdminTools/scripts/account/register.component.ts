
import { Component } from '@angular/core';
import { AccountService } from '../account/account.service';
import { RegisterModel } from '../models/register.model';
import { Http } from '@angular/http';

@Component({
    template: `
    <md-card>
       <form #registerForm="ngForm" (submit)="onSubmit()" novalidate> 
            <md-card-content>
                <md-input  mdInputValidation required type="email" placeholder="Email"  name="email" [(ngModel)]="registerModel.email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                    #email="ngModel" >
                    <md-hint class="error-hint"  align="end" *ngFor="let error of emailErrors">{{error}}</md-hint>
                </md-input>
                <md-input required type="password" placeholder="Password" name="password" [(ngModel)]="registerModel.password"
                    #password="ngModel" [dividerColor]="(password.pristine || password.valid) ? 'primary' : 'warn'">
                      <md-hint class="error-hint"  align="end" *ngFor="let error of passwordErrors">{{error}}</md-hint>
                </md-input>
                <md-input required type="password" placeholder="Confirm Password" name="confirm-password" [(ngModel)]="registerModel.confirmPassword"
                    #passwordConfirm="ngModel" [dividerColor]="(passwordConfirm.pristine || passwordConfirm.valid) ? 'primary' : 'warn'">
                      <md-hint class="error-hint" align="end" *ngFor="let error of confirmPasswordErrors">{{error}}</md-hint>
                </md-input>
            </md-card-content>
            <md-card-actions>
                <button md-button type="submit" [disabled]="!registerForm.form.valid" md-tooltip="Fill in required fields before submit">Done</button>
                <md-hint class="error-hint"  *ngFor="let error of globalErrors" >{{error}}</md-hint>
            </md-card-actions>
        </form>
    </md-card>
    `,
    selector: 'account-retister',
    providers: [
        AccountService
    ]
})
export class RegisterComponent {
    constructor(private accountService: AccountService) { }
    registerModel = new RegisterModel('', '', '');
    
    emailErrors = null;
    passwordErrors = null;
    confirmPasswordErrors = null;
    globalErrors = null;
    

    submitted = false;
    onSubmit() {
        this.submitted = true;
        this.accountService.register(this.registerModel)
        .catch(error => {
            console.trace(error);
            this.emailErrors = this.getError(error['model.Email']);
            this.passwordErrors = this.getError(error['model.Password']);
            this.confirmPasswordErrors = this.getError(error['model.ConfirmPassword']);
            this.globalErrors = this.getError(error['']);
        });

    }

    private getError(err: any):Array<string>{
        if (err){
            if (err instanceof Array){
                return err;
            } else {
                return [err]; 
            }
        }
        return null;
    }

       
}