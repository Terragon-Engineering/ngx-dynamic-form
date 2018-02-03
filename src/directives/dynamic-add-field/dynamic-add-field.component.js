/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormInputComponent } from "../../components/form-input/form-input.component";
import { FormButtonComponent } from "../../components/button/button.component";
import { FormSelectComponent } from "../../components/select/select.component";
import { FormFileUploadComponent } from "../../components/file-upload/file-upload.component";
import { FormDatetimeComponent } from "../../components/datetime/datetime.component";
const /** @type {?} */ components = {
    button: FormButtonComponent,
    input: FormInputComponent,
    select: FormSelectComponent,
    file: FormFileUploadComponent,
    date: FormDatetimeComponent
};
export class DynamicAddFieldDirective {
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
function DynamicAddFieldDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DynamicAddFieldDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DynamicAddFieldDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    DynamicAddFieldDirective.propDecorators;
    /** @type {?} */
    DynamicAddFieldDirective.prototype.config;
    /** @type {?} */
    DynamicAddFieldDirective.prototype.formGroup;
    /** @type {?} */
    DynamicAddFieldDirective.prototype.component;
    /** @type {?} */
    DynamicAddFieldDirective.prototype.resolver;
    /** @type {?} */
    DynamicAddFieldDirective.prototype.vcr;
}
