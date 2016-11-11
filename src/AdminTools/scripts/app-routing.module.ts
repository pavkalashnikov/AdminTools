import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home.component'

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'account', component: AccountComponent }
        ])

    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
