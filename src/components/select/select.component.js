/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
export class FormSelectComponent {
    /**
     * @param {?} arg
     * @return {?}
     */
    enumToArray(arg) {
        const /** @type {?} */ numKeyArr = [];
        const /** @type {?} */ valArr = [];
        const /** @type {?} */ returnedArray = [];
        const /** @type {?} */ objKeys = Object.keys(arg);
        objKeys.forEach(key => {
            const /** @type {?} */ numberKey = parseInt(key, 10);
            if (!isNaN(numberKey)) {
                numKeyArr.push(numberKey);
            }
            else {
                valArr.push([key]);
            }
            ;
        });
        returnedArray[0] = numKeyArr;
        returnedArray[1] = valArr;
        return returnedArray;
    }
}
FormSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-select',
                styles: [`

  `],
                template: `
    <div *ngIf='!config.hidden' [ngClass]="config.divClass" [formGroup]="formGroup">
        <div class="dynamic-field form-select">
            <select *ngIf="!config.enum" [hidden]='config.hidden' [formControlName]="config.name" [ngClass]=config.class>
                    <option value='' [selected]="true">{{ config.placeholder }}</option>
                    <option *ngFor="let option of config.options"
                            [value]='option'>
                            {{option}}
                    </option>

            </select>
            <select *ngIf="config.enum">
                    <option *ngFor="let o of enumToArray(config.enum)[0]; let i=index"
                            [value]='enumToArray(config.enum)[0][i]'>
                            {{ enumToArray(config.enum)[1][i] }}
                    </option>
            </select>
        </div>
    </div>
  `
            },] },
];
/** @nocollapse */
FormSelectComponent.ctorParameters = () => [];
function FormSelectComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FormSelectComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FormSelectComponent.ctorParameters;
    /** @type {?} */
    FormSelectComponent.prototype.config;
    /** @type {?} */
    FormSelectComponent.prototype.formGroup;
}
/**
 * @record
 */
function SelectConfig() { }
function SelectConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    SelectConfig.prototype.enum;
    /** @type {?|undefined} */
    SelectConfig.prototype.options;
}
