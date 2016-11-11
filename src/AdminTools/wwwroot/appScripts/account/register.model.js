"use strict";
var RegisterModel = (function () {
    function RegisterModel(email, password, confirmPassword) {
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
    return RegisterModel;
}());
exports.RegisterModel = RegisterModel;
