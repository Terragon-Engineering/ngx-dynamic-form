/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
export class FormButtonComponent {
}
FormButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-button',
                styles: [`

  `],
                template: `
    <div *ngIf='!config.hidden' class="form-input" [ngClass]="config.divClass" [formGroup]="formGroup">
        <div class="dynamic-field form-button">
            <button [disabled]="config.disabled" type="submit">
            {{ config.text }}
            </button>
        </div>
    </div>
  `
            },] },
];
/** @nocollapse */
FormButtonComponent.ctorParameters = () => [];
function FormButtonComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FormButtonComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FormButtonComponent.ctorParameters;
    /** @type {?} */
    FormButtonComponent.prototype.config;
    /** @type {?} */
    FormButtonComponent.prototype.formGroup;
}
