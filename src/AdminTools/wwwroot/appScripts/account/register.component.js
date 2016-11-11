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
var RegisterComponent = (function () {
    function RegisterComponent(accountService) {
        this.accountService = accountService;
        this.registerModel = new register_model_1.RegisterModel('', '', '');
        this.emailErrors = null;
        this.passwordErrors = null;
        this.confirmPasswordErrors = null;
        this.globalErrors = null;
        this.submitted = false;
    }
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.accountService.register(this.registerModel)
            .catch(function (error) {
            console.trace(error);
            _this.emailErrors = _this.getError(error['model.Email']);
            _this.passwordErrors = _this.getError(error['model.Password']);
            _this.confirmPasswordErrors = _this.getError(error['model.ConfirmPassword']);
            _this.globalErrors = _this.getError(error['']);
        });
    };
    RegisterComponent.prototype.getError = function (err) {
        if (err) {
            if (err instanceof Array) {
                return err;
            }
            else {
                return [err];
            }
        }
        return null;
    };
    RegisterComponent = __decorate([
        core_1.Component({
            template: "\n    <md-card>\n       <form #registerForm=\"ngForm\" (submit)=\"onSubmit()\" novalidate> \n            <md-card-content>\n                <md-input  mdInputValidation required type=\"email\" placeholder=\"Email\"  name=\"email\" [(ngModel)]=\"registerModel.email\"  pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$\"\n                    #email=\"ngModel\" >\n                    <md-hint class=\"error-hint\"  align=\"end\" *ngFor=\"let error of emailErrors\">{{error}}</md-hint>\n                </md-input>\n                <md-input required type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"registerModel.password\"\n                    #password=\"ngModel\" [dividerColor]=\"(password.pristine || password.valid) ? 'primary' : 'warn'\">\n                      <md-hint class=\"error-hint\"  align=\"end\" *ngFor=\"let error of passwordErrors\">{{error}}</md-hint>\n                </md-input>\n                <md-input required type=\"password\" placeholder=\"Confirm Password\" name=\"confirm-password\" [(ngModel)]=\"registerModel.confirmPassword\"\n                    #passwordConfirm=\"ngModel\" [dividerColor]=\"(passwordConfirm.pristine || passwordConfirm.valid) ? 'primary' : 'warn'\">\n                      <md-hint class=\"error-hint\" align=\"end\" *ngFor=\"let error of confirmPasswordErrors\">{{error}}</md-hint>\n                </md-input>\n            </md-card-content>\n            <md-card-actions>\n                <button md-button type=\"submit\" [disabled]=\"!registerForm.form.valid\" md-tooltip=\"Fill in required fields before submit\">Done</button>\n                <md-hint class=\"error-hint\"  *ngFor=\"let error of globalErrors\" >{{error}}</md-hint>\n            </md-card-actions>\n        </form>\n    </md-card>\n    ",
            selector: 'account-retister',
            providers: [
                account_service_1.AccountService
            ]
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
