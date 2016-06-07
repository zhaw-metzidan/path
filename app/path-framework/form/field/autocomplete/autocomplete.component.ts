import {Component, Input, Output} from '@angular/core';
import {FormField} from './../../../path';

@Component({
    selector: 'path-autocomplete',
    templateUrl: 'app/path-framework/form/field/autocomplete/autocomplete.html'
})

export class AutoCompleteComponent {
    @Input('field')
    @Output('field')
    field: AutoComplete;
}

export class AutoComplete extends FormField {
    private _query = '';
    private _filteredList:string[] = [];
    private _data = [];
    private _wordSearchEnabled:boolean;

    filter(value) {
        this.query = value;
        if (this.query.length > 0 && this.query.replace(/\s/g, '').length == 0) {
            /* space: all */
            this._filteredList = this._data;
        }
        else if (this.query !== "") {
            /* search term: filter */
            this._filteredList = this._data.filter(function (entry) {
                if (this._wordSearchEnabled) {
                    let tokens:string[] = entry.toLowerCase().split(" ");
                    for (let token of tokens) {
                        if (token.startsWith(this.query.toLowerCase())) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    return entry.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                }
            }.bind(this));
        } else {
            /* empty: nothing */
            this._filteredList = [];
        }
        this._filteredList.sort();
    }

    select(item) {
        this.query = item;
        this._filteredList = [];
    }

    get query():string {
        return this._query;
    }

    set query(value:string) {
        this._query = value;
    }

    set data(value:string[]) {
        this._data = value;
    }

    get filteredList():string[] {
        return this._filteredList;
    }

    set wordSearchEnabled(value:boolean) {
        this._wordSearchEnabled = value;
    }
}