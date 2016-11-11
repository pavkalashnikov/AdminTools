import { Directive, ElementRef, Input, Renderer } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
    selector: '[ngModel][mdInputValidation]',
    host: {
        "(input)": 'onInputChange($event)'
    }
})
export class ValidationDirective {
    private renderer: Renderer;
    private element: ElementRef;

    constructor(private model: NgModel, element: ElementRef, renderer: Renderer) {
        this.renderer = renderer;
        this.element = element;
    }

    onInputChange(event){
       if (!this.model.valid){
           console.trace(this.model);
           this.renderer.setElementProperty(this.element.nativeElement,'dividerColor','warn');
       }
    }
}