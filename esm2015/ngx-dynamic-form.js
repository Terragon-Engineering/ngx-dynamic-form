import { CUSTOM_ELEMENTS_SCHEMA, Component, ComponentFactoryResolver, Directive, EventEmitter, Input, NgModule, Output, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgDatepickerModule } from 'ng2-datepicker';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FormInputComponent {
    constructor() { }
}
FormInputComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-input',
                styles: [`
       input[type='submit'] {
           margin-top: 0.5rem 1rem;
       }

       .form-input {
           padding: 0.5rem 1rem;
       }

       .btn-dcb-info {
           color: #045B6B;
           background-color: white;
           border-color: #045B6B;
       }

       .btn-search {
           width: 100px;
       }

       .btn-danger {
           background-color: #A88199;
           border-color: whitesmoke;
       }
     `],
                template: `
       <div *ngIf='!config.hidden' class="form-input" [ngClass]="config.divClass" [formGroup]="formGroup">
           <label *ngIf="config.label && config.label!=''">{{ config.label }}</label>
           <input *ngIf="config.type ==='input' && !config.fromEnum " value={{config.text}} [disabled]="config.disabled" type={{config.inputType}} [ngClass]="config.class" [attr.placeholder]="config.placeholder" [formControlName]="config.name" />

           <select *ngIf="config.type==='select' && !config.fromEnum && !config.hidden" [formControlName]="config.name" [ngClass]=config.class>
                        <option value='' [selected]="true">{{ config.placeholder }}</option>
                        <option value={{option}}
                                *ngFor="let option of config.options">
                                {{option}}
                        </option>
               </select>
           <select *ngIf="config.type==='select' && config.fromEnum && !config.hidden" [formControlName]="config.name" [ngClass]=config.class>
                    <option value="" [selected]="true">{{ config.placeholder }}</option>
                    <option value={{config.options[0][i]}}
                            *ngFor="let o of config.options[0]; let i=index">
                            {{ config.options[1][i] }}
                    </option>
                </select>

           <textarea *ngIf="config.type==='textarea' && !config.hidden" [formControlName]="config.name" [attr.placeholder]="config.placeholder" rows={{config.rows}} cols={{config.cols}}></textarea>

           <ng-datepicker [ngClass]="config.class" *ngIf="config.type ==='date'" [formControlName]="config.name"></ng-datepicker>
       </div>
     `
                //      template: `<div class="row">
                //      <ng-container *ngFor='let input of config.Group'>
                //          <div *ngIf='!input.hidden' class="form-input" [ngClass]="input.divClass" [formGroup]="formGroup">
                //              <label *ngIf="input.label && input.label!=''">{{ input.label }}</label>
                //              <input *ngIf="input.type ==='input' && !input.fromEnum " value={{input.text}} [disabled]="input.disabled" type={{input.inputType}} [ngClass]="input.class" [attr.placeholder]="input.placeholder" [formControlName]="input.name" />
                //              <select *ngIf="input.type==='select' && !input.fromEnum && !input.hidden" [formControlName]="input.name" [ngClass]=input.class>
                //                   <option value='' [selected]="true">{{ input.placeholder }}</option>
                //                   <option value={{option}}
                //                           *ngFor="let option of input.options">
                //                           {{option}}
                //                   </option>
                //               </select>
                //              <select *ngIf="input.type==='select' && input.fromEnum && !input.hidden" [formControlName]="input.name" [ngClass]=input.class>
                //               <option value="" [selected]="true">{{ input.placeholder }}</option>
                //               <option value={{input.options[0][i]}}
                //                       *ngFor="let o of input.options[0]; let i=index">
                //                       {{ input.options[1][i] }}
                //               </option>
                //           </select>
                //              <textarea *ngIf="input.type==='textarea' && !input.hidden" [formControlName]="input.name" [attr.placeholder]="input.placeholder" rows={{input.rows}} cols={{input.cols}}></textarea>
                //              <ng-datepicker [ngClass]="input.class" *ngIf="input.type ==='date'" [formControlName]="input.name"></ng-datepicker>
                //          </div>
                //      </ng-container>
                //  </div>`
            },] },
];
/** @nocollapse */
FormInputComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FormSelectComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FormFileUploadComponent {
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
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FormDatetimeComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FormButtonComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DynamicFormComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const components = {
    button: FormButtonComponent,
    input: FormInputComponent,
    select: FormSelectComponent,
    file: FormFileUploadComponent,
    date: FormDatetimeComponent
};
class DynamicAddFieldDirective {
    /**
     * @param {?} resolver
     * @param {?} vcr
     */
    constructor(resolver, vcr) {
        this.resolver = resolver;
        this.vcr = vcr;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!components[this.config.type]) {
            const /** @type {?} */ supportedTypes = Object.keys(components).join(', ');
            throw new Error(`Trying to use an unsupported type (${this.config.type}).
              Supported types: ${supportedTypes}`);
        }
        const /** @type {?} */ component = components[this.config.type];
        const /** @type {?} */ factory = this.resolver.resolveComponentFactory(component);
        this.component = this.vcr.createComponent(factory);
        this.component.instance.config = this.config;
        this.component.instance.formGroup = this.formGroup;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.formGroup = this.formGroup;
        }
    }
}
DynamicAddFieldDirective.decorators = [
    { type: Directive, args: [{ selector: '[dynamicField]' },] },
];
/** @nocollapse */
DynamicAddFieldDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
    { type: ViewContainerRef, },
];
DynamicAddFieldDirective.propDecorators = {
    "config": [{ type: Input },],
    "formGroup": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DynamicFormModule {
}
DynamicFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    NgDatepickerModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    DynamicAddFieldDirective,
                    DynamicFormComponent,
                    FormInputComponent,
                    FormSelectComponent,
                    FormFileUploadComponent,
                    FormDatetimeComponent,
                    FormButtonComponent
                ],
                providers: [],
                exports: [
                    NgDatepickerModule,
                    DynamicFormComponent
                ], schemas: [
                    CUSTOM_ELEMENTS_SCHEMA
                ],
                entryComponents: [
                    FormInputComponent,
                    FormSelectComponent,
                    FormFileUploadComponent,
                    FormDatetimeComponent,
                    FormButtonComponent
                ]
            },] },
];
/** @nocollapse */
DynamicFormModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { FormInputComponent, FormSelectComponent, FormFileUploadComponent, FormDatetimeComponent, FormButtonComponent, DynamicFormComponent, DynamicAddFieldDirective, DynamicFormModule };
