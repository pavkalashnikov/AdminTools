import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { RegisterModel } from '../models/register.model';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class AccountService {
    constructor(private http: Http) { }

    register(registerModel: RegisterModel): Promise<any> {
        console.log(JSON.stringify(registerModel));
        return this.http.post('http://localhost:55300/api/Account/Register',registerModel)
            .toPromise()
            .then(response => response.json())
            .catch(err => {
                 return Promise.reject(err.json().ModelState)
            })
    }
}