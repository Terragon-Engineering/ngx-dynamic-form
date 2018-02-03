/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";
export class DynamicFormComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.config = [];
        this.submit = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get controls() { return this.config.filter(({ type }) => type !== 'button'); }
    /**
     * @return {?}
     */
    get changes() { return this.form.valueChanges; }
    /**
     * @return {?}
     */
    get valid() { return this.form.valid; }
    /**
     * @return {?}
     */
    get value() { return this.form.value; }
    /**
     * @return {?}
     */
    reset() { this.form.reset(); }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = this.createGroup();
        console.log(this.field);
    }
    /**
     * @return {?}
     */
    createGroup() {
        const /** @type {?} */ formGroup = this.fb.group({});
        this.config.forEach(control => {
            formGroup.addControl(control.name, this.createControl(control));
        });
        return formGroup;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    createControl(config) {
        const { disabled, validation, value } = config;
        return this.fb.control({ disabled, value }, validation);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.value);
    }
    /**
     * @param {?} name
     * @param {?} disable
     * @return {?}
     */
    setDisabled(name, disable) {
        if (this.form.controls[name]) {
            const /** @type {?} */ method = disable ? 'disable' : 'enable';
            this.form.controls[name][method]();
            return;
        }
        this.config = this.config.map((item) => {
            if (item.name === name) {
                item.disabled = disable;
            }
            return item;
        });
    }
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    setValue(name, value) {
        this.form.controls[name].setValue(value, { emitEvent: true });
    }
}
DynamicFormComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'dynamicForm',
                // tslint:disable-next-line:component-selector
                selector: 'dynamic-form',
                template: `
       <form [formGroup]="form" #newForm="ngForm" (ngSubmit)="handleSubmit($event)">
           <div class="row">
               <ng-container dynamicField *ngFor="let field of config" class="field.divClass" [config]="field" [formGroup]="form">
               </ng-container>
           </div>
       </form>
     `
            },] },
];
/** @nocollapse */
DynamicFormComponent.ctorParameters = () => [
    { type: FormBuilder, },
];
DynamicFormComponent.propDecorators = {
    "config": [{ type: Input },],
    "submit": [{ type: Output },],
};
function DynamicFormComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DynamicFormComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DynamicFormComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    DynamicFormComponent.propDecorators;
    /** @type {?} */
    DynamicFormComponent.prototype.config;
    /** @type {?} */
    DynamicFormComponent.prototype.field;
    /** @type {?} */
    DynamicFormComponent.prototype.submit;
    /** @type {?} */
    DynamicFormComponent.prototype.form;
    /** @type {?} */
    DynamicFormComponent.prototype.fb;
}
