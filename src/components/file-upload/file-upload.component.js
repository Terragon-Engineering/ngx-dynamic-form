/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
export class FormFileUploadComponent {
    /**
     * @param {?} event
     * @return {?}
     */
    handleFileUpload(event) {
        (/** @type {?} */ (this.formGroup.controls[this.config.name]))
            .setValue(this.config.multiple ? event.currentTarget.files : event.currentTarget.files[0], { onlySelf: true });
    }
}
FormFileUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-file-upload',
                styles: [`

  `],
                template: `
    <div *ngIf='!config.hidden' [ngClass]="config.divClass" [formGroup]="formGroup">
        <div class="dynamic-field form-select">
            <input [disabled]="config.disabled" type='file' (change)='handleFileUpload($event)' [accept]="config.accept" [ngClass]="config.class" [attr.placeholder]="config.placeholder" />
        </div>
    </div>
  `
            },] },
];
/** @nocollapse */
FormFileUploadComponent.ctorParameters = () => [];
function FormFileUploadComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FormFileUploadComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FormFileUploadComponent.ctorParameters;
    /** @type {?} */
    FormFileUploadComponent.prototype.config;
    /** @type {?} */
    FormFileUploadComponent.prototype.formGroup;
}
/**
 * @record
 */
export function FileConfig() { }
function FileConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    FileConfig.prototype.multiple;
    /** @type {?} */
    FileConfig.prototype.accept;
}
