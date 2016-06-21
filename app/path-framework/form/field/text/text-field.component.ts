import {Component, Input, Output, ElementRef} from '@angular/core';
import {FormField} from './../form-field';
import {FormFieldLabelComponent} from './../form-field-label.component';

@Component({
    selector: 'path-textfield',
    templateUrl: 'app/path-framework/form/field/text/text-field.component.html',
    directives: [FormFieldLabelComponent]
})
export class TextFieldComponent {
    @Input('field')
    @Output('field')
    field:TextField;
}

export class TextField extends FormField {
    private _value:string;

    get value():string {
        return this._value;
    }

    set value(value:string) {
        this._value = value;
    }
}