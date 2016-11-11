import { Component } from '@angular/core';
import { RegisterComponent } from './register.component';

@Component({
    template: `
    <md-tab-group id="account-tabs">
        <md-tab>
            <template md-tab-label>
                <i class="material-icons">person</i>
                <span>Log In</span>
            </template>
            <template md-tab-content>
                <account-login></account-login>
            </template>
        </md-tab>
        <md-tab>
            <template md-tab-label>
                <i class="material-icons">person_add</i>
                <span>Register</span>
            </template>
            <template md-tab-content>
                <account-retister></account-retister>
            </template>
        </md-tab>
    </md-tab-group>
    `
})
export class AccountComponent {

}