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
var AccountComponent = (function () {
    function AccountComponent() {
    }
    AccountComponent = __decorate([
        core_1.Component({
            template: "\n    <md-tab-group id=\"account-tabs\">\n        <md-tab>\n            <template md-tab-label>\n                <i class=\"material-icons\">person</i>\n                <span>Log In</span>\n            </template>\n            <template md-tab-content>\n                <account-login></account-login>\n            </template>\n        </md-tab>\n        <md-tab>\n            <template md-tab-label>\n                <i class=\"material-icons\">person_add</i>\n                <span>Register</span>\n            </template>\n            <template md-tab-content>\n                <account-retister></account-retister>\n            </template>\n        </md-tab>\n    </md-tab-group>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
