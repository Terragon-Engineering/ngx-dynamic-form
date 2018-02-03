/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
export class FormDatetimeComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        (/** @type {?} */ (this.formGroup.controls[this.config.name]))
            .setValue(new Date(), { onlySelf: true });
    }
}
FormDatetimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-datetime',
                styles: [`

  `],
                template: `
    <div *ngIf='!config.hidden' [ngClass]="config.divClass" [formGroup]="formGroup">
        <div class="dynamic-field form-datetime">
            <ng-datepicker [formControlName]="config.name"></ng-datepicker>

        </div>
    </div>
  `
            },] },
];
/** @nocollapse */
FormDatetimeComponent.ctorParameters = () => [];
function FormDatetimeComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FormDatetimeComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FormDatetimeComponent.ctorParameters;
    /** @type {?} */
    FormDatetimeComponent.prototype.config;
    /** @type {?} */
    FormDatetimeComponent.prototype.formGroup;
}
