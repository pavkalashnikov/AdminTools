"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var account_service_1 = require('../account/account.service');
var register_model_1 = require('../models/register.model');
var LoginComponent = (function () {
    function LoginComponent(accountService) {
        this.accountService = accountService;
        this.registerModel = new register_model_1.RegisterModel('', '', undefined);
        this.submitted = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        //this.submitted = true;
        //this.accountService.register(this.registerModel);
    };
    LoginComponent = __decorate([
        core_1.Component({
            template: "\n    <md-card>\n        <md-card-content>\n            <md-input type=\"email\" placeholder=\"Email\"  [(ngModel)]=\"registerModel.email\"></md-input>\n            <md-input type=\"password\" placeholder=\"Password\"  [(ngModel)]=\"registerModel.password\"></md-input>\n        </md-card-content>\n        <md-card-actions>\n            <button md-button (click)=\"onSubmit()\">Done</button>\n            <button md-button>Cancel</button>\n        </md-card-actions>\n    </md-card>\n    ",
            selector: 'account-login',
            providers: [
                account_service_1.AccountService
            ]
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
