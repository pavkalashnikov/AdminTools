"use strict";
var RegisterErrorModel = (function () {
    function RegisterErrorModel(emailError, passwordError, confirmPasswordError, globalError) {
        this.emailError = emailError;
        this.passwordError = passwordError;
        this.confirmPasswordError = confirmPasswordError;
        this.globalError = globalError;
    }
    return RegisterErrorModel;
}());
exports.RegisterErrorModel = RegisterErrorModel;
