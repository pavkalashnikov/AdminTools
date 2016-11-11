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
var forms_1 = require('@angular/forms');
var ValidationDirective = (function () {
    function ValidationDirective(model, element, renderer) {
        this.model = model;
        this.renderer = renderer;
        this.element = element;
    }
    ValidationDirective.prototype.onInputChange = function (event) {
        if (!this.model.valid) {
            console.trace(this.model);
            this.renderer.setElementProperty(this.element.nativeElement, 'dividerColor', 'warn');
        }
    };
    ValidationDirective = __decorate([
        core_1.Directive({
            selector: '[ngModel][mdInputValidation]',
            host: {
                "(input)": 'onInputChange($event)'
            }
        }), 
        __metadata('design:paramtypes', [forms_1.NgModel, core_1.ElementRef, core_1.Renderer])
    ], ValidationDirective);
    return ValidationDirective;
}());
exports.ValidationDirective = ValidationDirective;
