(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('ng2-datepicker')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@angular/common', 'ng2-datepicker'], factory) :
	(factory((global.ngxDynamicForm = {}),global.ng.core,global.ng.forms,global.ng.common,global.ng2Datepicker));
}(this, (function (exports,core,forms,common,ng2Datepicker) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormInputComponent = (function () {
    function FormInputComponent() {
    }
    FormInputComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-input',
                    styles: ["\n       input[type='submit'] {\n           margin-top: 0.5rem 1rem;\n       }\n\n       .form-input {\n           padding: 0.5rem 1rem;\n       }\n\n       .btn-dcb-info {\n           color: #045B6B;\n           background-color: white;\n           border-color: #045B6B;\n       }\n\n       .btn-search {\n           width: 100px;\n       }\n\n       .btn-danger {\n           background-color: #A88199;\n           border-color: whitesmoke;\n       }\n     "],
                    template: "\n       <div *ngIf='!config.hidden' class=\"form-input\" [ngClass]=\"config.divClass\" [formGroup]=\"formGroup\">\n           <label *ngIf=\"config.label && config.label!=''\">{{ config.label }}</label>\n           <input *ngIf=\"config.type ==='input' && !config.fromEnum \" value={{config.text}} [disabled]=\"config.disabled\" type={{config.inputType}} [ngClass]=\"config.class\" [attr.placeholder]=\"config.placeholder\" [formControlName]=\"config.name\" />\n\n           <select *ngIf=\"config.type==='select' && !config.fromEnum && !config.hidden\" [formControlName]=\"config.name\" [ngClass]=config.class>\n                        <option value='' [selected]=\"true\">{{ config.placeholder }}</option>\n                        <option value={{option}}\n                                *ngFor=\"let option of config.options\">\n                                {{option}}\n                        </option>\n               </select>\n           <select *ngIf=\"config.type==='select' && config.fromEnum && !config.hidden\" [formControlName]=\"config.name\" [ngClass]=config.class>\n                    <option value=\"\" [selected]=\"true\">{{ config.placeholder }}</option>\n                    <option value={{config.options[0][i]}}\n                            *ngFor=\"let o of config.options[0]; let i=index\">\n                            {{ config.options[1][i] }}\n                    </option>\n                </select>\n\n           <textarea *ngIf=\"config.type==='textarea' && !config.hidden\" [formControlName]=\"config.name\" [attr.placeholder]=\"config.placeholder\" rows={{config.rows}} cols={{config.cols}}></textarea>\n\n           <ng-datepicker [ngClass]=\"config.class\" *ngIf=\"config.type ==='date'\" [formControlName]=\"config.name\"></ng-datepicker>\n       </div>\n     "
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
    FormInputComponent.ctorParameters = function () { return []; };
    return FormInputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormSelectComponent = (function () {
    function FormSelectComponent() {
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    FormSelectComponent.prototype.enumToArray = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        var /** @type {?} */ numKeyArr = [];
        var /** @type {?} */ valArr = [];
        var /** @type {?} */ returnedArray = [];
        var /** @type {?} */ objKeys = Object.keys(arg);
        objKeys.forEach(function (key) {
            var /** @type {?} */ numberKey = parseInt(key, 10);
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
    };
    FormSelectComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'form-select',
                    styles: ["\n\n  "],
                    template: "\n    <div *ngIf='!config.hidden' [ngClass]=\"config.divClass\" [formGroup]=\"formGroup\">\n        <div class=\"dynamic-field form-select\">\n            <select *ngIf=\"!config.enum\" [hidden]='config.hidden' [formControlName]=\"config.name\" [ngClass]=config.class>\n                    <option value='' [selected]=\"true\">{{ config.placeholder }}</option>\n                    <option *ngFor=\"let option of config.options\"\n                            [value]='option'>\n                            {{option}}\n                    </option>\n\n            </select>\n            <select *ngIf=\"config.enum\">\n                    <option *ngFor=\"let o of enumToArray(config.enum)[0]; let i=index\"\n                            [value]='enumToArray(config.enum)[0][i]'>\n                            {{ enumToArray(config.enum)[1][i] }}\n                    </option>\n            </select>\n        </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    FormSelectComponent.ctorParameters = function () { return []; };
    return FormSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormFileUploadComponent = (function () {
    function FormFileUploadComponent() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    FormFileUploadComponent.prototype.handleFileUpload = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        (/** @type {?} */ (this.formGroup.controls[this.config.name]))
            .setValue(this.config.multiple ? event.currentTarget.files : event.currentTarget.files[0], { onlySelf: true });
    };
    FormFileUploadComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'form-file-upload',
                    styles: ["\n\n  "],
                    template: "\n    <div *ngIf='!config.hidden' [ngClass]=\"config.divClass\" [formGroup]=\"formGroup\">\n        <div class=\"dynamic-field form-select\">\n            <input [disabled]=\"config.disabled\" type='file' (change)='handleFileUpload($event)' [accept]=\"config.accept\" [ngClass]=\"config.class\" [attr.placeholder]=\"config.placeholder\" />\n        </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    FormFileUploadComponent.ctorParameters = function () { return []; };
    return FormFileUploadComponent;
}());
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormDatetimeComponent = (function () {
    function FormDatetimeComponent() {
    }
    /**
     * @return {?}
     */
    FormDatetimeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        (/** @type {?} */ (this.formGroup.controls[this.config.name]))
            .setValue(new Date(), { onlySelf: true });
    };
    FormDatetimeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'form-datetime',
                    styles: ["\n\n  "],
                    template: "\n    <div *ngIf='!config.hidden' [ngClass]=\"config.divClass\" [formGroup]=\"formGroup\">\n        <div class=\"dynamic-field form-datetime\">\n            <ng-datepicker [formControlName]=\"config.name\"></ng-datepicker>\n\n        </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    FormDatetimeComponent.ctorParameters = function () { return []; };
    return FormDatetimeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormButtonComponent = (function () {
    function FormButtonComponent() {
    }
    FormButtonComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'form-button',
                    styles: ["\n\n  "],
                    template: "\n    <div *ngIf='!config.hidden' class=\"form-input\" [ngClass]=\"config.divClass\" [formGroup]=\"formGroup\">\n        <div class=\"dynamic-field form-button\">\n            <button [disabled]=\"config.disabled\" type=\"submit\">\n            {{ config.text }}\n            </button>\n        </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    FormButtonComponent.ctorParameters = function () { return []; };
    return FormButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DynamicFormComponent = (function () {
    function DynamicFormComponent(fb) {
        this.fb = fb;
        this.config = [];
        this.submit = new core.EventEmitter();
    }
    Object.defineProperty(DynamicFormComponent.prototype, "controls", {
        get: /**
         * @return {?}
         */
        function () { return this.config.filter(function (_a) {
            var type = _a.type;
            return type !== 'button';
        }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "changes", {
        get: /**
         * @return {?}
         */
        function () { return this.form.valueChanges; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () { return this.form.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicFormComponent.prototype.reset = /**
     * @return {?}
     */
    function () { this.form.reset(); };
    /**
     * @return {?}
     */
    DynamicFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form = this.createGroup();
        console.log(this.field);
    };
    /**
     * @return {?}
     */
    DynamicFormComponent.prototype.createGroup = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ formGroup = this.fb.group({});
        this.config.forEach(function (control) {
            formGroup.addControl(control.name, _this.createControl(control));
        });
        return formGroup;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    DynamicFormComponent.prototype.createControl = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var disabled = config.disabled, validation = config.validation, value = config.value;
        return this.fb.control({ disabled: disabled, value: value }, validation);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DynamicFormComponent.prototype.handleSubmit = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.value);
    };
    /**
     * @param {?} name
     * @param {?} disable
     * @return {?}
     */
    DynamicFormComponent.prototype.setDisabled = /**
     * @param {?} name
     * @param {?} disable
     * @return {?}
     */
    function (name, disable) {
        if (this.form.controls[name]) {
            var /** @type {?} */ method = disable ? 'disable' : 'enable';
            this.form.controls[name][method]();
            return;
        }
        this.config = this.config.map(function (item) {
            if (item.name === name) {
                item.disabled = disable;
            }
            return item;
        });
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    DynamicFormComponent.prototype.setValue = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        this.form.controls[name].setValue(value, { emitEvent: true });
    };
    DynamicFormComponent.decorators = [
        { type: core.Component, args: [{
                    exportAs: 'dynamicForm',
                    // tslint:disable-next-line:component-selector
                    selector: 'dynamic-form',
                    template: "\n       <form [formGroup]=\"form\" #newForm=\"ngForm\" (ngSubmit)=\"handleSubmit($event)\">\n           <div class=\"row\">\n               <ng-container dynamicField *ngFor=\"let field of config\" class=\"field.divClass\" [config]=\"field\" [formGroup]=\"form\">\n               </ng-container>\n           </div>\n       </form>\n     "
                },] },
    ];
    /** @nocollapse */
    DynamicFormComponent.ctorParameters = function () { return [
        { type: forms.FormBuilder, },
    ]; };
    DynamicFormComponent.propDecorators = {
        "config": [{ type: core.Input },],
        "submit": [{ type: core.Output },],
    };
    return DynamicFormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var components = {
    button: FormButtonComponent,
    input: FormInputComponent,
    select: FormSelectComponent,
    file: FormFileUploadComponent,
    date: FormDatetimeComponent
};
var DynamicAddFieldDirective = (function () {
    function DynamicAddFieldDirective(resolver, vcr) {
        this.resolver = resolver;
        this.vcr = vcr;
    }
    /**
     * @return {?}
     */
    DynamicAddFieldDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!components[this.config.type]) {
            var /** @type {?} */ supportedTypes = Object.keys(components).join(', ');
            throw new Error("Trying to use an unsupported type (" + this.config.type + ").\n              Supported types: " + supportedTypes);
        }
        var /** @type {?} */ component = components[this.config.type];
        var /** @type {?} */ factory = this.resolver.resolveComponentFactory(component);
        this.component = this.vcr.createComponent(factory);
        this.component.instance.config = this.config;
        this.component.instance.formGroup = this.formGroup;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DynamicAddFieldDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.formGroup = this.formGroup;
        }
    };
    DynamicAddFieldDirective.decorators = [
        { type: core.Directive, args: [{ selector: '[dynamicField]' },] },
    ];
    /** @nocollapse */
    DynamicAddFieldDirective.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver, },
        { type: core.ViewContainerRef, },
    ]; };
    DynamicAddFieldDirective.propDecorators = {
        "config": [{ type: core.Input },],
        "formGroup": [{ type: core.Input },],
    };
    return DynamicAddFieldDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DynamicFormModule = (function () {
    function DynamicFormModule() {
    }
    DynamicFormModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        ng2Datepicker.NgDatepickerModule,
                        forms.ReactiveFormsModule
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
                        ng2Datepicker.NgDatepickerModule,
                        DynamicFormComponent
                    ], schemas: [
                        core.CUSTOM_ELEMENTS_SCHEMA
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
    DynamicFormModule.ctorParameters = function () { return []; };
    return DynamicFormModule;
}());

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

exports.FormInputComponent = FormInputComponent;
exports.FormSelectComponent = FormSelectComponent;
exports.FormFileUploadComponent = FormFileUploadComponent;
exports.FormDatetimeComponent = FormDatetimeComponent;
exports.FormButtonComponent = FormButtonComponent;
exports.DynamicFormComponent = DynamicFormComponent;
exports.DynamicAddFieldDirective = DynamicAddFieldDirective;
exports.DynamicFormModule = DynamicFormModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
